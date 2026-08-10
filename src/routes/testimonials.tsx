import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote, PlayCircle, Info } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, PageHero, Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    pageMeta({
      title: "Client Testimonials | MAP Advertising, Jaipur",
      description:
        "What clients say about working with MAP Advertising — signage, branding and outdoor advertising delivery in Jaipur since 2013.",
      path: "/testimonials",
    }),
  component: Testimonials,
});

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < n ? "size-4 fill-accent text-accent" : "size-4 text-muted-foreground/40"}
          aria-hidden
        />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Reputation earned one installation at a time"
        sub="Feedback from the kinds of businesses we work with every month across Jaipur."
      />

      <Section className="py-6 md:py-10">
        <Reveal>
          <div className="glass flex items-start gap-3 p-5 text-sm text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
            <p>
              Content note: the reviews below are representative placeholders written to reflect
              typical client feedback. They will be replaced with verified Google reviews once MAP
              supplies them.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="py-6 md:py-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 0.06}>
              <figure className="glass glass-hover h-full p-7">
                <div className="flex items-center justify-between">
                  <Stars n={t.rating} />
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    Google-style review
                  </span>
                </div>
                <Quote className="mt-5 size-5 text-primary" aria-hidden />
                <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <span className="text-sm">
                    <span className="block font-medium">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Carousel" title="In their words" />
        <Reveal className="mt-10">
          <Carousel opts={{ loop: true }} className="mx-auto max-w-4xl">
            <CarouselContent>
              {TESTIMONIALS.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="glass px-8 py-14 text-center md:px-16">
                    <Stars n={t.rating} />
                    <p className="mx-auto mt-6 max-w-2xl font-display text-xl leading-relaxed sm:text-2xl">
                      “{t.text}”
                    </p>
                    <p className="mt-7 text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Video"
          title="Video testimonials"
          sub="Placeholders reserved for client video reviews currently being recorded."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {["Retail client", "Healthcare client", "Hospitality client"].map((label, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <div className="glass grid aspect-video place-items-center border-dashed p-6 text-center">
                <div>
                  <PlayCircle className="mx-auto size-10 text-primary/70" aria-hidden />
                  <p className="mt-4 font-display text-sm font-semibold">{label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Video coming soon</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Become the next satisfied client" />
    </>
  );
}
