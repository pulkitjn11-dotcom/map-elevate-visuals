import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, PageHero, Section } from "@/components/site/Section";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => {
    const base = pageMeta({
      title: "FAQ | Signage Pricing, Timelines & Installation — MAP Jaipur",
      description:
        "Answers on signage pricing, delivery timelines, installation, municipal approvals, maintenance and coverage across Jaipur and Rajasthan.",
      path: "/faq",
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: Faq,
});

function Faq() {
  const cats = useMemo(() => ["All", ...Array.from(new Set(FAQS.map((f) => f.cat)))], []);
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? FAQS : FAQS.filter((f) => f.cat === cat);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="The questions we get asked before every project"
        sub="Pricing, timelines, installation, approvals, maintenance and coverage — answered plainly."
      />

      <Section className="py-6 md:py-12">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm transition-all",
                  cat === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-surface/50 text-muted-foreground hover:border-primary/50 hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="glass divide-y divide-border px-6">
            {list.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`} className="border-none">
                <AccordionTrigger className="py-5 text-left font-display text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>

      <CTASection title="Still have a question?" sub="Send it on WhatsApp — we usually reply the same day." />
    </>
  );
}
