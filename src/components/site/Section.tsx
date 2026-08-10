import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/site";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[2.75rem]">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("container-map py-20 md:py-28", className)}>
      {children}
    </section>
  );
}

export function CTASection({
  title = "Ready to make your brand impossible to miss?",
  sub = "Share your requirement and get an itemised quotation — usually within one working day.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <Section>
      <Reveal className="glass relative overflow-hidden px-6 py-14 text-center md:px-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 right-0 size-72 rounded-full bg-accent/20 blur-[110px]"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">{sub}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_20px_50px_-18px_var(--primary)]"
            >
              Get Free Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-secondary/60 px-7 text-sm font-medium transition-colors hover:border-accent/60"
            >
              <MessageCircle className="size-4 text-accent" aria-hidden />
              WhatsApp {COMPANY.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  image,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  image?: string;
}) {
  return (
    <header className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt=""
            aria-hidden
            loading="lazy"
            className="size-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 -z-10 size-[420px] rounded-full bg-primary/20 blur-[130px]"
      />
      <div className="container-map">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{sub}</p>
        </Reveal>
      </div>
    </header>
  );
}
