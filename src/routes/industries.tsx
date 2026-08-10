import { createFileRoute } from "@tanstack/react-router";
import { INDUSTRIES, IMAGES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, PageHero, Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/industries")({
  head: () =>
    pageMeta({
      title: "Industries We Serve | Signage Company Jaipur — MAP Advertising",
      description:
        "Retail, hospitals, schools, hotels, restaurants, corporate offices, manufacturing, real estate and more — branding and signage tailored per industry in Jaipur.",
      path: "/industries",
    }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Fifty-plus business categories, one standard of finish"
        sub="Every sector reads signage differently. We adapt size, material, lighting and message to how your customers actually arrive."
        image={IMAGES.pfHospital}
      />

      <Section className="py-8 md:py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 0.06}>
              <article className="glass glass-hover h-full p-7">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold">{ind.name}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{ind.value}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Not listed?"
          title="If your customers walk in, we can brand it"
          sub="Gyms, salons, warehouses, banquet halls, petrol pumps, clinics, co-working spaces — the approach stays the same: survey, specify, produce, install."
          align="center"
        />
      </Section>

      <CTASection title="Tell us your industry and we'll suggest what works" />
    </>
  );
}
