import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X, Layers, Building2, ArrowUpRight } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES, type Project } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, PageHero, Section } from "@/components/site/Section";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    pageMeta({
      title: "Portfolio | Signage & Branding Projects in Jaipur — MAP",
      description:
        "Selected signage, in-shop branding, outdoor hoarding, print and digital display projects delivered by MAP Advertising across Jaipur and Rajasthan.",
      path: "/portfolio",
    }),
  component: Portfolio,
});

function Portfolio() {
  const [cat, setCat] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);
  const list = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work you can walk past"
        sub="A selection of signage, branding and print projects. Project names are generic representations of real job types; client identities are not published without consent."
      />

      <Section className="py-6 md:py-10">
        <Reveal>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {PROJECT_CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                onClick={() => setCat(c)}
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

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.button
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.04 }}
                onClick={() => setActive(p)}
                className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[20px] border border-border text-left transition-colors hover:border-primary/50"
              >
                <div
                  className={cn(
                    "relative overflow-hidden",
                    p.span === "tall" ? "aspect-3/4" : p.span === "wide" ? "aspect-4/3" : "aspect-square",
                  )}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                    {p.category}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                    <div>
                      <h2 className="font-display text-lg font-semibold">{p.name}</h2>
                      <p className="mt-1 text-xs text-muted-foreground">{p.industry}</p>
                    </div>
                    <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Note: images are representative art direction. Final project photography will replace them
          once released by clients.
        </p>
      </Section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-background/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.name}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-h-[88vh] w-full max-w-3xl overflow-y-auto"
            >
              <div className="relative">
                <img src={active.image} alt={active.name} className="h-64 w-full object-cover md:h-80" />
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close quick view"
                  className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-border bg-background/80 backdrop-blur"
                >
                  <X className="size-4" aria-hidden />
                </button>
              </div>
              <div className="p-7 md:p-9">
                <span className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {active.category}
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold">{active.name}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{active.summary}</p>
                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
                      <Building2 className="size-3.5" aria-hidden /> Industry
                    </p>
                    <p className="mt-2 text-sm">{active.industry}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Client name withheld — shared on request with permission.
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
                      <Layers className="size-3.5" aria-hidden /> Deliverables
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {active.deliverables.map((d) => (
                        <li key={d} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-7 grid grid-cols-3 gap-3">
                  {[active.image, active.image, active.image].map((img, i) => (
                    <div key={i} className="aspect-4/3 overflow-hidden rounded-xl border border-border">
                      <img src={img} alt="" aria-hidden className="size-full object-cover opacity-70" />
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Additional project gallery images pending client release.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection title="Want your project on this wall?" />
    </>
  );
}
