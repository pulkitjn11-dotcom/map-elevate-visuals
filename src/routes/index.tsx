import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FEATURED_PROJECTS, type PortfolioProject } from "@/lib/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  Layers,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import hero from "@/assets/hero-signage.jpg";
import { COMPANY, SERVICES, INDUSTRIES, TESTIMONIALS, IMAGES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { CTASection, Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Advertising Company in Jaipur | LED Signage & Branding — MAP",
      description:
        "MAP Advertising is a branding company in Jaipur since 2013 — LED sign boards, shop branding, outdoor hoardings, flex printing and digital standees. Get a free quote.",
      path: "/",
    }),
  component: Home,
});

const STATS = [
  { value: 13, suffix: "+", label: "Years in business", icon: CalendarClock },
  { value: 500, suffix: "+", label: "Projects delivered", icon: Layers },
  { value: 50, suffix: "+", label: "Business categories", icon: Building2 },
  { value: 0, suffix: "", label: "Jaipur & beyond", icon: MapPin, static: true },
];

const WHY = [
  { icon: Wrench, title: "In-house fabrication", body: "Design, print, fabrication and installation under one accountable team — no vendor chains." },
  { icon: ShieldCheck, title: "Built for Rajasthan", body: "Materials and electricals specified for heat, dust and monsoon so signage stays looking new." },
  { icon: Zap, title: "Deadline discipline", body: "Survey in 24–48 hours, scheduled installation, and photographs on completion." },
  { icon: BadgeCheck, title: "Registered & documented", body: "GST and MSME registered with itemised quotations and proper invoicing." },
];

function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const [featured, setFeatured] = useState<PortfolioProject | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <>
      {/* HERO */}
      <div ref={ref} className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <motion.div
          style={reduce ? {} : { y, opacity: fade }}
          className="absolute inset-0 -z-10"
        >
          <img
            src={hero}
            alt="Illuminated storefront LED signage at night"
            width={1600}
            height={1104}
            className="size-full scale-110 object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
        </motion.div>
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/3 -z-10 size-[560px] rounded-full bg-primary/25 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 -z-10 size-80 rounded-full bg-accent/15 blur-[120px]"
        />

        <div className="container-map">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              Brand Visibility Solutions Company · Jaipur since 2013
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 max-w-4xl text-[2.6rem] font-bold leading-[1.03] sm:text-6xl md:text-7xl">
              Brands people notice.{" "}
              <span className="text-gradient">Visibility businesses trust.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We design, fabricate and install LED signages, shop branding, outdoor hoardings and
              large-format print across Jaipur — the physical brand presence your customers actually
              walk past.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_22px_55px_-20px_var(--primary)]"
              >
                Get Free Quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-8 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:border-primary/50"
              >
                View Our Work
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {["Established 2013", "GST Registered", "MSME Registered"].map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-xs text-muted-foreground backdrop-blur"
                >
                  <BadgeCheck className="size-3.5 text-primary" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* INTRO + STATS */}
      <Section className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl">
              An advertising company in Jaipur built around execution, not presentations.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Media of Advertising & Publicity has worked with retailers, hospitals, hotels,
              institutions and manufacturers since 2013. We stay deliberately offline-first:
              signage, print and outdoor media that people encounter in the real world — surveyed
              properly, fabricated in-house and installed by our own teams.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Read our story <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="glass glass-hover h-full p-6">
                  <s.icon className="size-5 text-primary" aria-hidden />
                  <p className="mt-5 font-display text-3xl font-bold sm:text-4xl">
                    {s.static ? "Jaipur" : <Counter value={s.value} suffix={s.suffix} />}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Five disciplines, one accountable team"
          sub="From a single shop board to a multi-site outdoor campaign — specified, produced and installed by MAP."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="glass glass-hover group block h-full overflow-hidden"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-primary">
                    Explore
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <Link
              to="/contact"
              className="glass glass-hover flex h-full min-h-56 flex-col justify-between bg-primary/10 p-6"
            >
              <MessageCircle className="size-6 text-accent" aria-hidden />
              <div>
                <h3 className="font-display text-xl font-semibold">Something else in mind?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vehicle branding, event setups, exhibition stalls — tell us the requirement.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-primary">
                  Talk to us <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <SectionHeading
          eyebrow="Industries"
          title="Branding tuned to how your business is used"
          sub="Fifty-plus business categories served across Jaipur and Rajasthan."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.slice(0, 9).map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.04}>
              <div className="glass glass-hover h-full p-5">
                <h3 className="font-display text-base font-semibold">{ind.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{ind.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Link
            to="/industries"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            See all industries <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section id="featured-projects">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured projects"
            title="Selected work across six branding categories"
            sub="Real photographs from MAP's archive are being added here — slots marked as pending are placeholders, not stock imagery."
          />
          <Reveal>
            <Link
              to="/portfolio"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-surface/60 px-6 text-sm transition-colors hover:border-primary/50"
            >
              Full portfolio <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.slice(0, 6).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <ProjectCard project={p} index={i} animate={false} onOpen={setFeatured} />
            </Reveal>
          ))}
        </div>
        <ProjectDetail project={featured} onClose={() => setFeatured(null)} />
      </Section>

      {/* WHY MAP */}
      <Section>
        <SectionHeading eyebrow="Why MAP" title="Thirteen years of doing the unglamorous part well" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <div className="glass glass-hover flex h-full gap-5 p-7">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                  <w.icon className="size-5 text-primary" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeading
          eyebrow="Client voices"
          title="What clients say about working with us"
          sub="Representative placeholder reviews shown until verified client reviews are supplied."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.06}>
              <figure className="glass glass-hover h-full p-7">
                <div className="flex gap-0.5" aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="size-4 fill-accent text-accent" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CLIENT WORDMARKS */}
      <Section className="py-12">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Trusted across sectors
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {["Retail Group", "City Hospital", "Grand Hotels", "Edu Campus", "Auto Works", "Realty Co."].map(
              (n) => (
                <div
                  key={n}
                  className="grid h-16 place-items-center rounded-2xl border border-border bg-surface/40 px-4 text-center font-display text-sm tracking-wide text-muted-foreground"
                >
                  {n}
                </div>
              ),
            )}
          </div>
          <p className="mt-5 text-center text-xs text-muted-foreground">
            Generic wordmarks shown — actual client logos will replace these once approved for public use.
          </p>
        </Reveal>
      </Section>

      {/* JAIPUR STRIP */}
      <Section className="py-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[20px] border border-border">
            <img
              src={IMAGES.jaipur}
              alt="Jaipur street at night with illuminated shop signage"
              loading="lazy"
              className="h-64 w-full object-cover opacity-70 md:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 md:p-14">
              <div className="max-w-md">
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  Made for Jaipur streets
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We know how a board reads in the old city, on JLN Road and on a highway approach —
                  and we specify size, brightness and material accordingly.
                </p>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="size-4" aria-hidden /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
