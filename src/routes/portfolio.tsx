import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS, type PortfolioProject } from "@/lib/portfolio";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, PageHero, Section } from "@/components/site/Section";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    pageMeta({
      title: "Portfolio | Signage & Branding Projects in Jaipur — MAP",
      description:
        "LED signage, in-shop branding, outdoor hoardings, flex & banners and digital signage projects delivered by MAP Advertising across Jaipur and Rajasthan.",
      path: "/portfolio",
    }),
  component: Portfolio,
});

const FILTERS = [{ id: "all", label: "All" } as const, ...PORTFOLIO_CATEGORIES];

function Portfolio() {
  const [cat, setCat] = useState<string>("all");
  const [active, setActive] = useState<PortfolioProject | null>(null);
  const list = useMemo(
    () => (cat === "all" ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter((p) => p.category === cat)),
    [cat],
  );
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: PORTFOLIO_PROJECTS.length };
    for (const p of PORTFOLIO_PROJECTS) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work you can walk past"
        sub="Real project photography from MAP's signage, branding and print work. Placeholder slots below are being replaced with photos from our archive."
      />

      <Section className="py-4 md:py-8">
        <Reveal>
          <div className="-mx-5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2" role="tablist" aria-label="Project categories">
              {FILTERS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={cat === c.id}
                  onClick={() => setCat(c.id)}
                  className={cn(
                    "inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full border px-5 text-sm transition-all",
                    cat === c.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface/50 text-muted-foreground hover:border-primary/50 hover:text-foreground",
                  )}
                >
                  {c.label}
                  <span className={cn("text-xs tabular-nums", cat === c.id ? "opacity-80" : "opacity-60")}>
                    {counts[c.id] ?? 0}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <div key={p.id} className="mb-4 break-inside-avoid">
                <ProjectCard project={p} index={i} onOpen={setActive} />
              </div>
            ))}
          </AnimatePresence>
        </div>

        {list.length === 0 && (
          <p className="py-16 text-center text-sm text-muted-foreground">No projects in this category yet.</p>
        )}

        <p className="mt-8 text-xs text-muted-foreground">
          Slots marked “photo pending” are editable placeholders and will be replaced with MAP’s own project
          photographs. No stock imagery is shown as MAP work.
        </p>
      </Section>

      <ProjectDetail project={active} onClose={() => setActive(null)} />

      <CTASection title="Want your project on this wall?" />
    </>
  );
}
