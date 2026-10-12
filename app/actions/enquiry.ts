"use server";

import { readValues, validateEnquiry, type EnquiryState, type EnquiryValues } from "@/lib/enquiry";
import { site } from "@/lib/site";

const FALLBACK = `Please email ${site.email} or call ${site.phone.display} and our team will help you directly.`;

function summarise(v: EnquiryValues) {
  return [
    "New contact enquiry from the META website",
    "",
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    `Phone: ${v.phone || "—"}`,
    `Subject: ${v.subject || "—"}`,
    "",
    "Message:",
    v.message,
  ].join("\n");
}

/**
 * Delivers an enquiry through whichever integration is configured:
 *  1. ENQUIRY_WEBHOOK_URL — JSON POST (e.g. Zapier, Make, Formspree, a CRM endpoint), or
 *  2. RESEND_API_KEY + ENQUIRY_TO_EMAIL + ENQUIRY_FROM_EMAIL — email via the Resend API.
 * Returns "unconfigured" when neither is set, so the UI never shows a false confirmation.
 */
async function deliver(v: EnquiryValues): Promise<"sent" | "failed" | "unconfigured"> {
  const text = summarise(v);
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  try {
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, source: "meta-website", submittedAt: new Date().toISOString(), text }),
        signal: AbortSignal.timeout(10_000),
      });
      return res.ok ? "sent" : "failed";
    }
    if (resendKey && to && from) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: to.split(",").map((s) => s.trim()),
          reply_to: v.email,
          subject: `Website enquiry: ${v.subject || v.name}`,
          text,
        }),
        signal: AbortSignal.timeout(10_000),
      });
      return res.ok ? "sent" : "failed";
    }
    return "unconfigured";
  } catch (err) {
    console.error("[enquiry] delivery error", err);
    return "failed";
  }
}

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const values = readValues(formData);

  // Honeypot: real visitors never see or fill this field.
  if (String(formData.get("company_website") ?? "").trim()) {
    return { status: "success" };
  }

  const fieldErrors = validateEnquiry(values);
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors, values };
  }

  const result = await deliver(values);
  if (result === "sent") {
    return {
      status: "success",
      message: "Thank you — your message has been sent. Our team will get back to you soon.",
    };
  }

  if (result === "unconfigured") {
    console.warn("[enquiry] No form delivery configured. Set ENQUIRY_WEBHOOK_URL or RESEND_API_KEY/ENQUIRY_TO_EMAIL/ENQUIRY_FROM_EMAIL.");
    return {
      status: "error",
      message: `Sorry — online enquiries aren’t connected yet, so your details have not been sent. ${FALLBACK}`,
      values,
    };
  }

  return {
    status: "error",
    message: `Sorry — something went wrong and your details were not sent. ${FALLBACK}`,
    values,
  };
}
