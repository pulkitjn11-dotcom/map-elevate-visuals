import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, Section } from "@/components/site/Section";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.post as { title: string; excerpt: string };
    const base = pageMeta({
      title: `${p.title} | MAP Advertising Jaipur`,
      description: p.excerpt.slice(0, 155),
      path: `/blog/${params.slug}`,
      type: "article",
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", item: "/" },
              { name: "Blog", item: "/blog" },
              { name: p.title, item: `/blog/${params.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: Article,
});

function Article() {
  const { post } = Route.useLoaderData() as {
    post: { slug: string; title: string; excerpt: string; category: string; read: string; image: string };
  };
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <header className="relative overflow-hidden pt-36 pb-12 md:pt-44">
        <div className="absolute inset-0 -z-10">
          <img src={post.image} alt="" aria-hidden loading="lazy" className="size-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/90 to-background" />
        </div>
        <div className="container-map">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="size-3" aria-hidden />
              <Link to="/blog" className="hover:text-foreground">Blog</Link>
              <ChevronRight className="size-3" aria-hidden />
              <span className="text-foreground">{post.category}</span>
            </nav>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.1] sm:text-5xl">{post.title}</h1>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4" aria-hidden /> {post.read} read · {post.category}
            </p>
          </Reveal>
        </div>
      </header>

      <Section className="py-8 md:py-12">
        <Reveal>
          <div className="overflow-hidden rounded-[20px] border border-border">
            <img src={post.image} alt={post.title} loading="lazy" className="max-h-[460px] w-full object-cover" />
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-2xl">
          <article className="space-y-6 leading-relaxed text-muted-foreground">
            <p className="text-lg text-foreground">{post.excerpt}</p>
            <h2 className="font-display text-2xl font-bold text-foreground">Start with the site, not the design</h2>
            <p>
              Almost every avoidable signage problem traces back to a skipped survey. Before any
              artwork is drawn, we check the mounting surface, available power, viewing distance,
              approach angle and how much ambient light the location already has at night. Those
              five inputs decide size, brightness and material more than any style preference.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">Material choices that hold up</h2>
            <p>
              In Rajasthan, heat and dust punish cheap substrates. Cast acrylic holds colour where
              extruded sheet yellows; a properly sealed ACP frame keeps water out of the electricals;
              and IP-rated drivers matter far more than the LED modules themselves. Paying a little
              more at the specification stage is what keeps a board looking new in year four.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">Budgeting realistically</h2>
            <p>
              Ask for an itemised quotation: face, frame, lighting, structure, installation and
              transport as separate lines. It makes comparison between vendors honest, and it shows
              you exactly where a cheaper quotation has removed something you will miss later.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">Plan for maintenance</h2>
            <p>
              Signage is an asset, not a one-off purchase. A short seasonal check — clean the face,
              inspect fasteners before monsoon, verify driver temperatures in summer — costs very
              little and prevents the failures that make a brand look neglected.
            </p>
            <p className="rounded-2xl border border-border bg-surface/50 p-5 text-sm">
              Content note: this is a template article demonstrating the layout and tone of MAP's
              blog. Final editorial content will be supplied by the company.
            </p>
          </article>
        </Reveal>
      </Section>

      <Section className="py-8">
        <h2 className="font-display text-2xl font-bold">Keep reading</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.06}>
              <Link
                to="/blog/$slug"
                params={{ slug: r.slug }}
                className="glass glass-hover group block h-full overflow-hidden"
              >
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-widest text-accent">{r.category}</span>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug">{r.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Have a signage project in mind?" />
    </>
  );
}
