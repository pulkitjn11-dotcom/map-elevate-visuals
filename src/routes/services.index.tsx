import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageMeta({
      title: "Signage & Branding Services in Jaipur | MAP Advertising",
      description:
        "LED signages, in-shop branding, outdoor hoardings, flex printing and digital standees — full-service signage company in Jaipur since 2013.",
      path: "/services",
    }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything that puts your brand in front of a real person"
        sub="Five core disciplines, delivered end to end: survey, design, fabrication, print, installation and service."
        image={SERVICES[0]!.image}
      />

      <Section className="py-8 md:py-12">
        <div className="grid gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="glass glass-hover group grid overflow-hidden md:grid-cols-2"
              >
                <div className={`relative aspect-16/10 overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent md:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="text-xs uppercase tracking-[0.28em] text-accent">
                    0{i + 1} — {s.keywords[0]}
                  </p>
                  <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.tagline}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.offerings.slice(0, 4).map((o) => (
                      <li
                        key={o.title}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {o.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    View service
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
