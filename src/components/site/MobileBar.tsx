import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/lib/site";

export function MobileBar() {
  return (
    <>
      <a
        href={COMPANY.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with MAP Advertising on WhatsApp"
        className="fixed bottom-24 right-4 z-50 grid size-14 place-items-center rounded-full bg-[oklch(0.72_0.17_150)] text-[oklch(0.16_0.03_264)] shadow-[0_18px_45px_-16px_oklch(0.72_0.17_150)] transition-transform hover:scale-105 lg:bottom-8"
      >
        <MessageCircle className="size-7" aria-hidden />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-2 gap-3 px-4 py-3">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-secondary text-sm font-medium"
          >
            <Phone className="size-4" aria-hidden />
            Call now
          </a>
          <Link
            to="/contact"
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-medium text-primary-foreground"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}
