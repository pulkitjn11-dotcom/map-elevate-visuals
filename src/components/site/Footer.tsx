import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle, Sparkles } from "lucide-react";
import { COMPANY, SERVICES, NAV_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface/40">
      <div className="container-map grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/40">
              <Sparkles className="size-5 text-primary" aria-hidden />
            </span>
            <span className="font-display text-lg font-bold">MAP Advertising</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Media of Advertising & Publicity — an offline branding and advertising company in
            Jaipur delivering signage, print and outdoor media since 2013.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              GST Registered
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              MSME Registered
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              Est. 2013
            </span>
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Quick links
          </h2>
          <ul className="mt-5 grid gap-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Services
          </h2>
          <ul className="mt-5 grid gap-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Contact
          </h2>
          <ul className="mt-5 grid gap-4 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-start gap-3 hover:text-foreground">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-foreground"
              >
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                WhatsApp us
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 break-all hover:text-foreground">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {COMPANY.email}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.mapsSearch}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-foreground"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {COMPANY.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-map flex flex-col gap-2 py-6 pb-28 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between lg:pb-6">
          <p>© {new Date().getFullYear()} Media of Advertising & Publicity, Jaipur. All rights reserved.</p>
          <p>Advertising & signage company serving Jaipur and Rajasthan.</p>
        </div>
      </div>
    </footer>
  );
}
