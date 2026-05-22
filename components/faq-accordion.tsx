"use client";

import { startTransition, useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqs } from "@/lib/site-data";

export function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const open = index === activeIndex;

        return (
          <article
            key={faq.question}
            className="rounded-[28px] border border-slate-200/70 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
          >
            <button
              type="button"
              onClick={() =>
                startTransition(() => {
                  setActiveIndex(open ? -1 : index);
                })
              }
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-lg font-semibold text-slate-950">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-slate-500 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {open ? (
              <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
