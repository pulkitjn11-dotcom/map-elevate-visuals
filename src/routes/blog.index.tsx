import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, Mail } from "lucide-react";
import { BLOG_POSTS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageMeta({
      title: "Signage & Branding Insights | MAP Advertising Blog, Jaipur",
      description:
        "Practical articles on LED sign boards, shop branding, outdoor hoardings and large-format print from a Jaipur signage company with 13+ years on site.",
      path: "/blog",
    }),
  component: Blog,
});

function Blog() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))],
    [],
  );
  const featured = BLOG_POSTS.find((p) => p.featured)!;
  const rest = BLOG_POSTS.filter((p) => !p.featured).filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      (q.trim() === "" ||
        (p.title + p.excerpt).toLowerCase().includes(q.trim().toLowerCase())),
  );

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Signage knowledge, minus the jargon"
        sub="Short, practical reads on choosing, budgeting and maintaining physical branding."
      />

      <Section className="py-6 md:py-10">
        <Reveal>
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="glass glass-hover group grid overflow-hidden lg:grid-cols-2"
          >
            <div className="relative aspect-16/10 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/70 to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="text-xs uppercase tracking-[0.28em] text-accent">Featured</span>
              <h2 className="mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <p className="mt-5 text-xs text-muted-foreground">
                {featured.category} · {featured.read} read
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Read article
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        </Reveal>
      </Section>

      <Section className="py-6 md:py-10">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition-all",
                    cat === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface/50 text-muted-foreground hover:border-primary/50 hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="relative w-full md:w-72">
              <span className="sr-only">Search articles</span>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles"
                className="h-11 w-full rounded-full border border-border bg-surface/50 pl-11 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60"
              />
            </label>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="glass glass-hover group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] uppercase tracking-widest text-accent">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <span className="mt-5 text-xs text-muted-foreground">{p.read} read</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        {rest.length === 0 && (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            No articles match that search yet.
          </p>
        )}
      </Section>

      <Section>
        <Reveal className="glass relative overflow-hidden p-8 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-primary/25 blur-[110px]"
          />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <Mail className="size-6 text-accent" aria-hidden />
              <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                Signage tips, once a month
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Material advice, cost benchmarks and campaign ideas. No spam.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row"
              aria-label="Newsletter signup"
            >
              <label className="flex-1">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-12 w-full rounded-full border border-border bg-background/60 px-5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60"
                />
              </label>
              <button
                type="submit"
                className="h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              >
                Subscribe
              </button>
            </form>
          </div>
          <p className="relative mt-4 text-xs text-muted-foreground">
            Newsletter interface shown for demonstration — subscriptions are not stored yet.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
