"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

import { submitEnquiry } from "@/app/actions/enquiry";
import { readValues, validateEnquiry, type EnquiryState, type FieldErrors } from "@/lib/enquiry";

const initialState: EnquiryState = { status: "idle" };

const inputCls =
  "peer h-13 w-full rounded-2xl border border-line bg-white px-5 pb-2 pt-6 text-[0.9375rem] text-ink outline-none transition-all duration-300 placeholder:text-transparent focus:-translate-y-0.5 focus:border-brand-500 focus:shadow-card focus:ring-4 focus:ring-brand-500/15 aria-[invalid=true]:border-danger aria-[invalid=true]:ring-danger/10";

const labelCls =
  "pointer-events-none absolute left-5 top-4 origin-left text-[0.9375rem] text-muted transition-all duration-300 peer-focus:top-2 peer-focus:scale-[0.8] peer-focus:text-brand-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-[0.8]";

function ErrorText({ id, text }: { id: string; text?: string }) {
  if (!text) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm text-danger">
      <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      {text}
    </p>
  );
}

/** The original site's contact form (Name, Email, Phone, Subject, Message) with floating labels. */
export function EnquiryForm({
  subject,
  onSubjectChange,
}: {
  /** When provided, the Subject field is controlled (e.g. by the enquiry category tiles). */
  subject?: string;
  onSubjectChange?: (value: string) => void;
} = {}) {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const [clientErrors, setClientErrors] = useState<FieldErrors>({});
  const summaryRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Server-side errors replace client errors once a submission returns.
  const [lastState, setLastState] = useState(state);
  if (lastState !== state) {
    setLastState(state);
    setClientErrors({});
  }
  const errors: FieldErrors = { ...state.fieldErrors, ...clientErrors };
  const values = state.values ?? {};

  useEffect(() => {
    if (state.status !== "idle") summaryRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div ref={summaryRef} tabIndex={-1} role="status" className="flex flex-col items-center gap-4 rounded-[var(--radius-card)] bg-white p-10 text-center outline-none">
        <span className="relative grid size-20 place-items-center rounded-full bg-success/10">
          <span className="absolute inset-0 animate-ping rounded-full bg-success/20" aria-hidden="true" />
          <CheckCircle2 className="size-11 text-success" aria-hidden="true" />
        </span>
        <h2 className="text-2xl font-semibold">Thank you</h2>
        <p className="max-w-md">{state.message ?? "Your message has been sent."}</p>
      </div>
    );
  }

  const field = (name: keyof FieldErrors) => ({
    id: `contact-${name}`,
    name,
    placeholder: " ",
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });
  const errorCount = Object.keys(errors).length;

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        const found = validateEnquiry(readValues(new FormData(e.currentTarget)));
        setClientErrors(found);
        const first = Object.keys(found)[0];
        if (first) {
          e.preventDefault();
          formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
        }
      }}
    >
      {/* Honeypot for spam bots — hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-clip">
        <label htmlFor="contact-company_website">Company website</label>
        <input id="contact-company_website" type="text" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div ref={summaryRef} tabIndex={-1} className="outline-none" aria-live="assertive">
        {state.status === "error" && state.message ? (
          <p role="alert" className="flex items-start gap-3 rounded-2xl border border-danger/30 bg-danger/5 p-4 text-[0.9375rem] text-danger">
            <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            {state.message}
          </p>
        ) : errorCount > 0 ? (
          <p role="alert" className="flex items-start gap-3 rounded-2xl border border-danger/30 bg-danger/5 p-4 text-[0.9375rem] text-danger">
            <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            Please check the {errorCount === 1 ? "highlighted field" : `${errorCount} highlighted fields`}.
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <div className="relative">
            <input {...field("name")} type="text" autoComplete="name" required defaultValue={values.name} className={inputCls} />
            <label htmlFor="contact-name" className={labelCls}>
              Name <span className="text-danger">*</span>
            </label>
          </div>
          <ErrorText id="contact-name-error" text={errors.name} />
        </div>
        <div>
          <div className="relative">
            <input {...field("email")} type="email" autoComplete="email" inputMode="email" required defaultValue={values.email} className={inputCls} />
            <label htmlFor="contact-email" className={labelCls}>
              Email <span className="text-danger">*</span>
            </label>
          </div>
          <ErrorText id="contact-email-error" text={errors.email} />
        </div>
        <div>
          <div className="relative">
            <input {...field("phone")} type="tel" autoComplete="tel" inputMode="tel" defaultValue={values.phone} className={inputCls} />
            <label htmlFor="contact-phone" className={labelCls}>
              Phone
            </label>
          </div>
          <ErrorText id="contact-phone-error" text={errors.phone} />
        </div>
        <div>
          <div className="relative">
            <input
              {...field("subject")}
              type="text"
              {...(subject !== undefined
                ? { value: subject, onChange: (e: React.ChangeEvent<HTMLInputElement>) => onSubjectChange?.(e.target.value) }
                : { defaultValue: values.subject })}
              className={inputCls}
            />
            <label htmlFor="contact-subject" className={labelCls}>
              Subject
            </label>
          </div>
          <ErrorText id="contact-subject-error" text={errors.subject} />
        </div>
      </div>

      <div>
        <div className="relative">
          <textarea {...field("message")} rows={6} required maxLength={2000} defaultValue={values.message} className={`${inputCls} h-auto min-h-40 resize-y pt-7`} />
          <label htmlFor="contact-message" className={labelCls}>
            Message <span className="text-danger">*</span>
          </label>
        </div>
        <ErrorText id="contact-message-error" text={errors.message} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="submit"
          disabled={pending}
          className="shine group inline-flex h-14 items-center gap-3 rounded-full bg-accent py-3 pl-7 pr-3 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift disabled:cursor-wait disabled:opacity-70"
        >
          <span className="relative z-[2]">{pending ? "Sending…" : "Submit"}</span>
          <span className="relative z-[2] grid size-9 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-[360deg]" aria-hidden="true">
            {pending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
          </span>
        </button>
        <p className="text-xs text-muted">
          <span className="text-danger">*</span> Required fields
        </p>
      </div>
    </form>
  );
}
