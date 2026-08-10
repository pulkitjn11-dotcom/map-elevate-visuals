import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, HeartHandshake, Ruler, Truck, Users } from "lucide-react";
import { IMAGES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { CTASection, PageHero, Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About MAP Advertising | Branding Company in Jaipur since 2013",
      description:
        "The story of Media of Advertising & Publicity, Jaipur — founded in 2013, delivering signage, print and outdoor branding with in-house fabrication and installation.",
      path: "/about",
    }),
  component: About,
});

const TIMELINE = [
  { year: "2013", title: "MAP is founded in Jaipur", body: "A small print and signboard operation on JLN Road, taking on shopfront work one client at a time." },
  { year: "2015", title: "Fabrication brought in-house", body: "Acrylic, ACP and LED assembly moved under our own roof to control quality and turnaround." },
  { year: "2017", title: "Outdoor media added", body: "Hoardings, pole kiosks and wall branding expand the offering from storefront to city scale." },
  { year: "2019", title: "Institutional projects", body: "Hospitals, colleges and corporate campuses bring wayfinding and multi-zone signage systems." },
  { year: "2022", title: "Digital displays", body: "Digital standees and screen-based signage introduced for hotels, retail and reception areas." },
  { year: "Today", title: "500+ projects, 50+ categories", body: "A full-stack offline branding partner serving Jaipur, Rajasthan and beyond." },
];

const VALUES = [
  { icon: Ruler, title: "Measure twice", body: "Every job starts with a physical survey. Assumptions are what make signage look wrong." },
  { icon: HeartHandshake, title: "Quote honestly", body: "Itemised quotations, no hidden fabrication extras added later." },
  { icon: Truck, title: "Finish on site", body: "Delivery is not completion. Our teams mount, wire, clean and hand over." },
  { icon: Users, title: "Stay reachable", body: "One point of contact from survey to service call, on WhatsApp or phone." },
];

const CAPABILITY = [
  { title: "Design & artwork", body: "Layout, mockups on your actual facade photo, and print-ready files." },
  { title: "Fabrication", body: "Acrylic, ACP, MS/SS structure, LED assembly and lightbox build." },
  { title: "Large-format print", body: "Flex, vinyl, backlit media, lamination and finishing." },
  { title: "Installation", body: "Height work, electricals, interior fitting and night-shift execution." },
  { title: "Project coordination", body: "Multi-site scheduling, documentation and completion photographs." },
  { title: "Service & maintenance", body: "Module replacement, re-skinning and seasonal checks." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Jaipur signage company that grew up on the street, not in a studio"
        sub="Media of Advertising & Publicity started in 2013 with one belief: a brand becomes real the moment somebody sees it on a wall, a facade or a road."
        image={IMAGES.workshop}
      />

      <Section className="py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[20px] border border-border">
              <img
                src={IMAGES.workshop}
                alt="Signage fabrication team installing an illuminated panel"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Founder's story</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">
              Built by a signboard maker, not a marketer
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                MAP began as a one-person workshop taking small shopfront jobs in central Jaipur.
                The founder spent the first years personally surveying sites, cutting acrylic and
                standing on scaffolding at midnight to finish an installation before a store opened.
              </p>
              <p>
                That habit set the company's standard: nothing leaves production that the team
                wouldn't be happy to see on their own shop. Thirteen years later the workshop is
                bigger and the projects are larger, but the survey-first, finish-properly approach
                hasn't changed.
              </p>
              <p className="text-sm italic">
                Founder name and photograph are intentionally omitted here until the company
                supplies them for publication.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full p-8">
              <Eye className="size-6 text-primary" aria-hidden />
              <h2 className="mt-5 font-display text-2xl font-bold">Vision</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To be the branding partner Rajasthan businesses call first when they want to be
                seen — known for signage that stays sharp years after installation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass h-full p-8">
              <Compass className="size-6 text-accent" aria-hidden />
              <h2 className="mt-5 font-display text-2xl font-bold">Mission</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Deliver honest quotations, durable materials and installations that run on schedule
                — for a single shop board or a fifty-site campaign, with the same care.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Values" title="Four things we don't compromise" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="glass glass-hover h-full p-6">
                <v.icon className="size-5 text-primary" aria-hidden />
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Timeline" title="From 2013 to now" />
        <ol className="relative mt-14 border-l border-border pl-8">
          {TIMELINE.map((t, i) => (
            <li key={t.year} className="pb-10 last:pb-0">
              <Reveal delay={i * 0.05}>
                <span
                  aria-hidden
                  className="absolute -left-[7px] mt-2 size-3.5 rounded-full border-2 border-background bg-primary"
                />
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
                  {t.year}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold">{t.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Capability"
          title="What our team actually does day to day"
          sub="Design, production, installation and service handled by people on our own payroll."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITY.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="glass glass-hover h-full p-6">
                <h3 className="font-display text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Work with a team that finishes what it starts" />
    </>
  );
}
