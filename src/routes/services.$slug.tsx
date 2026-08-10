import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICES } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    const base = pageMeta({
      title: `${s.title} in Jaipur | MAP Advertising`,
      description: `${s.short} ${s.tagline}`.slice(0, 155),
      path: `/services/${params.slug}`,
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
              { name: "Services", item: "/services" },
              { name: s.title, item: `/services/${params.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: ServicePage,
});

const PROCESS = [
  { step: "01", title: "Site survey", body: "We visit, measure, photograph and check power, mounting and sight-lines." },
  { step: "02", title: "Design & quote", body: "Mockups on your actual facade or interior, with an itemised written quotation." },
  { step: "03", title: "Production", body: "Fabrication and print in our workshop with a pre-dispatch quality check." },
  { step: "04", title: "Install & handover", body: "Scheduled installation, electricals, cleaning and completion photographs." },
];

function ServicePage() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <header className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <img src={service.image} alt="" aria-hidden loading="lazy" className="size-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/88 to-background" />
        </div>
        <div className="container-map">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="size-3" aria-hidden />
              <Link to="/services" className="hover:text-foreground">Services</Link>
              <ChevronRight className="size-3" aria-hidden />
              <span className="text-foreground">{service.title}</span>
            </nav>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              {service.title} <span className="text-gradient">in Jaipur</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {service.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              >
                Get a quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface/60 px-7 text-sm font-medium transition-colors hover:border-primary/50"
              >
                See related work
              </Link>
            </div>
          </Reveal>
        </div>
      </header>

      <Section className="py-8 md:py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[20px] border border-border">
              <img src={service.image} alt={service.title} loading="lazy" className="w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-2xl font-bold sm:text-3xl">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{service.intro}</p>
            <ul className="mt-7 grid gap-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Scope" title={`What's included in ${service.title.toLowerCase()}`} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.offerings.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.05}>
              <div className="glass glass-hover h-full p-6">
                <h3 className="font-display text-base font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title="How we deliver, in four steps" />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.07}>
              <div className="glass glass-hover h-full p-6">
                <span className="font-display text-3xl font-bold text-primary/70">{p.step}</span>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title={`${service.title} questions, answered`} />
        <Reveal className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="glass divide-y divide-border px-6">
            {service.faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`i${i}`} className="border-none">
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

      <Section className="py-8">
        <SectionHeading eyebrow="Other services" title="Explore more of what we do" />
        <div className="mt-10 flex flex-wrap gap-3">
          {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </Section>

      <CTASection title={`Need ${service.title.toLowerCase()} for your business?`} />
    </>
  );
}
