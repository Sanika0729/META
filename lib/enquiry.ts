/** Contact form definition and validation (shared by client and server). Fields match the original site's form. */

export type EnquiryValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof EnquiryValues, string>>;

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: FieldErrors;
  values?: Partial<EnquiryValues>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[\d\s()-]{7,20}$/;

export function readValues(formData: FormData): EnquiryValues {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  return {
    name: get("name"),
    email: get("email"),
    phone: get("phone"),
    subject: get("subject"),
    message: get("message"),
  };
}

export function validateEnquiry(v: EnquiryValues): FieldErrors {
  const e: FieldErrors = {};
  if (v.name.length < 2) e.name = "Please enter your name.";
  else if (v.name.length > 100) e.name = "Please keep your name under 100 characters.";

  if (!v.email) e.email = "Please enter your email address.";
  else if (!EMAIL.test(v.email) || v.email.length > 254) e.email = "Please enter a valid email address, like name@example.com.";

  const digits = v.phone.replace(/\D/g, "").length;
  if (v.phone && (!PHONE.test(v.phone) || digits < 7 || digits > 15)) {
    e.phone = "Please enter a valid phone number, including the country code.";
  }

  if (v.subject.length > 150) e.subject = "Please keep the subject under 150 characters.";

  if (v.message.length < 10) e.message = "Please enter a message (at least 10 characters).";
  else if (v.message.length > 2000) e.message = "Please keep your message under 2,000 characters.";

  return e;
}
