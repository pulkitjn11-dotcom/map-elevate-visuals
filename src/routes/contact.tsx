import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import {
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta({
      title: "Contact MAP Advertising | Signage Company in Jaipur",
      description:
        "Call +91 9829017970 or WhatsApp MAP Advertising, 7 Gangwal Park, JLN Road, Jaipur — free quotes for LED signage, shop branding, hoardings and printing.",
      path: "/contact",
    }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{8,16}$/, "Enter a valid phone number"),
  business: z.string().trim().min(2, "Please enter your business name").max(100),
  service: z.string().min(1, "Select a service"),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(1000),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { name: "", phone: "", business: "", service: "", message: "" };

const field =
  "h-12 w-full rounded-xl border border-border bg-background/60 px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/70";

function Contact() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Values, v: string) => setValues((p) => ({ ...p, [k]: v }));

  const waLink = `${COMPANY.whatsapp}?text=${encodeURIComponent(
    `Hi MAP Advertising, I'm ${values.name || "(name)"} from ${values.business || "(business)"}. I need: ${
      values.service || "(service)"
    }. ${values.message}`.slice(0, 900),
  )}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Values;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what needs to be seen"
        sub="Share your requirement and we'll respond with an itemised quotation — usually within one working day."
      />

      <Section className="py-6 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="glass p-7 md:p-10">
              {sent ? (
                <div className="py-6 text-center">
                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-primary/15 ring-1 ring-primary/40">
                    <CheckCircle2 className="size-8 text-primary" aria-hidden />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-bold">Enquiry ready to send</h2>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Your details are captured locally in this browser. For the fastest response,
                    send them straight to our team on WhatsApp or call us — this form does not
                    deliver email yet.
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
                    >
                      <MessageCircle className="size-4" aria-hidden /> Send on WhatsApp
                    </a>
                    <a
                      href={`tel:${COMPANY.phoneRaw}`}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-7 text-sm font-medium"
                    >
                      <Phone className="size-4" aria-hidden /> Call {COMPANY.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => {
                      setSent(false);
                      setValues(EMPTY);
                    }}
                    className="mt-6 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-5">
                  <h2 className="font-display text-2xl font-bold">Request a free quote</h2>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-sm">Your name</span>
                      <input
                        className={field}
                        value={values.name}
                        maxLength={80}
                        onChange={(e) => set("name", e.target.value)}
                        aria-invalid={!!errors.name}
                        placeholder="Full name"
                      />
                      {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm">Phone / WhatsApp</span>
                      <input
                        className={field}
                        value={values.phone}
                        maxLength={16}
                        inputMode="tel"
                        onChange={(e) => set("phone", e.target.value)}
                        aria-invalid={!!errors.phone}
                        placeholder="+91 ..."
                      />
                      {errors.phone && <span className="text-xs text-destructive">{errors.phone}</span>}
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-sm">Business name</span>
                      <input
                        className={field}
                        value={values.business}
                        maxLength={100}
                        onChange={(e) => set("business", e.target.value)}
                        aria-invalid={!!errors.business}
                        placeholder="Company or shop"
                      />
                      {errors.business && (
                        <span className="text-xs text-destructive">{errors.business}</span>
                      )}
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm">Service needed</span>
                      <select
                        className={field}
                        value={values.service}
                        onChange={(e) => set("service", e.target.value)}
                        aria-invalid={!!errors.service}
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Other">Something else</option>
                      </select>
                      {errors.service && (
                        <span className="text-xs text-destructive">{errors.service}</span>
                      )}
                    </label>
                  </div>

                  <label className="grid gap-2">
                    <span className="text-sm">Requirement details</span>
                    <textarea
                      rows={5}
                      maxLength={1000}
                      className="w-full rounded-xl border border-border bg-background/60 p-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/70"
                      value={values.message}
                      onChange={(e) => set("message", e.target.value)}
                      aria-invalid={!!errors.message}
                      placeholder="Size, location, deadline, any reference images..."
                    />
                    {errors.message && (
                      <span className="text-xs text-destructive">{errors.message}</span>
                    )}
                  </label>

                  <button
                    type="submit"
                    className="h-12 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_20px_50px_-20px_var(--primary)]"
                  >
                    Submit enquiry
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Submitting shows a confirmation in your browser and prepares a WhatsApp message —
                    no email is sent automatically.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.06}>
              <div className="glass p-7 md:p-9">
                <h2 className="font-display text-xl font-bold">Office details</h2>
                <ul className="mt-6 grid gap-5 text-sm">
                  <li>
                    <a href={`tel:${COMPANY.phoneRaw}`} className="flex gap-4 hover:text-primary">
                      <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <span>
                        <span className="block text-muted-foreground">Phone / WhatsApp</span>
                        {COMPANY.phone}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${COMPANY.email}`} className="flex gap-4 break-all hover:text-primary">
                      <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <span>
                        <span className="block text-muted-foreground">Email</span>
                        {COMPANY.email}
                      </span>
                    </a>
                  </li>
                  <li className="flex gap-4">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>
                      <span className="block text-muted-foreground">Address</span>
                      {COMPANY.address}
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>
                      <span className="block text-muted-foreground">Working hours</span>
                      Mon–Sat, 10:00 – 19:00 IST
                    </span>
                  </li>
                </ul>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="size-4" aria-hidden /> Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="glass overflow-hidden">
                <div className="relative grid h-56 place-items-center bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_60%)]">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:36px_36px]"
                  />
                  <div className="relative text-center">
                    <MapPin className="mx-auto size-8 text-accent" aria-hidden />
                    <p className="mt-3 font-display text-sm font-semibold">Gangwal Park, JLN Road</p>
                    <p className="text-xs text-muted-foreground">Behind SMS Medical College, Jaipur</p>
                  </div>
                </div>
                <div className="p-6">
                  <a
                    href={COMPANY.mapsSearch}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-surface/60 px-5 text-sm transition-colors hover:border-primary/50"
                  >
                    Open in Google Maps <ExternalLink className="size-4" aria-hidden />
                  </a>
                  <p className="mt-3 text-xs text-muted-foreground">
                    A live map embed will be added once the exact map listing is confirmed.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="glass flex flex-wrap items-center justify-between gap-4 p-7">
                <div>
                  <h2 className="font-display text-lg font-semibold">Company profile</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Coming soon — request it on WhatsApp meanwhile.
                  </p>
                </div>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex h-11 cursor-not-allowed items-center gap-2 rounded-full border border-border bg-surface/40 px-5 text-sm text-muted-foreground"
                >
                  <Download className="size-4" aria-hidden /> Company profile — coming soon
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
