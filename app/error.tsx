"use client";

import { RotateCcw } from "lucide-react";

import { site } from "@/lib/site";

export default function Error({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <section className="py-20 md:py-32" role="alert">
      <div className="container-site flex flex-col items-center gap-6 text-center">
        <h1 className="h-section">Something went wrong</h1>
        <p className="max-w-lg">
          Sorry — this page didn’t load properly. Please try again, or contact us at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-brand-600 underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => retry()}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-ink transition-shadow hover:shadow-lift"
        >
          <RotateCcw className="size-4" aria-hidden="true" /> Try again
        </button>
      </div>
    </section>
  );
}
