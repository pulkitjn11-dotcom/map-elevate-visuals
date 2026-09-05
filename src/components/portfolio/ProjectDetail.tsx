import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, MapPin, MessageCircle, Tag, User, X, Maximize2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { categoryLabel, hasImages, type PortfolioProject } from "@/lib/portfolio";
import { COMPANY } from "@/lib/site";
import { Lightbox } from "./Lightbox";
import { PlaceholderTile, ProjectImage } from "./ProjectImage";

export function ProjectDetail({
  project,
  onClose,
}: {
  project: PortfolioProject | null;
  onClose: () => void;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (!project) return;
    setLightbox(null);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && lightbox === null && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  const meta = project
    ? [
        { icon: Tag, label: "Category", value: categoryLabel(project.category) },
        { icon: Building2, label: "Industry", value: project.industry },
        { icon: MapPin, label: "Location", value: project.location },
        { icon: User, label: "Client", value: project.client },
      ].filter((m) => m.value)
    : [];

  return (
    <>
      <AnimatePresence>
        {project && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-background/85 backdrop-blur-md sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-h-[92dvh] w-full max-w-4xl overflow-y-auto rounded-b-none sm:rounded-b-[20px]"
            >
              {/* Cover */}
              <div className="relative">
                {hasImages(project) ? (
                  <button
                    type="button"
                    onClick={() => setLightbox(0)}
                    className="group block w-full text-left"
                    aria-label="Open image fullscreen"
                  >
                    <ProjectImage
                      image={project.images[0]!}
                      alt={project.title}
                      className="max-h-[52dvh] rounded-t-[20px]"
                      sizes="(min-width: 896px) 896px, 100vw"
                      priority
                    />
                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs backdrop-blur transition-colors group-hover:border-primary/60">
                      <Maximize2 className="size-3.5" aria-hidden /> Fullscreen
                    </span>
                  </button>
                ) : (
                  <PlaceholderTile project={project} ratio="16 / 9" className="rounded-t-[20px]" />
                )}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close project details"
                  className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-border bg-background/80 backdrop-blur"
                >
                  <X className="size-4" aria-hidden />
                </button>
              </div>

              <div className="p-6 md:p-9">
                <span className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {categoryLabel(project.category)}
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">{project.title}</h2>
                {project.description ? (
                  <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
                ) : (
                  <p className="mt-3 text-sm text-muted-foreground/80">
                    Description pending — add it in the portfolio data file when available.
                  </p>
                )}

                <dl className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4">
                  {meta.map((m) => (
                    <div key={m.label}>
                      <dt className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
                        <m.icon className="size-3.5" aria-hidden /> {m.label}
                      </dt>
                      <dd className="mt-2 text-sm">{m.value}</dd>
                    </div>
                  ))}
                  {!project.industry && !project.location && (
                    <p className="col-span-2 text-xs text-muted-foreground/80 sm:col-span-3">
                      Industry and location to be added.
                    </p>
                  )}
                </dl>

                {/* Gallery */}
                {project.images.length > 1 && (
                  <>
                    <p className="mt-8 text-xs uppercase tracking-widest text-accent">
                      Gallery · {project.images.length} photos
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4 md:gap-3">
                      {project.images.map((im, i) => (
                        <button
                          key={im.src}
                          type="button"
                          onClick={() => setLightbox(i)}
                          aria-label={`Open image ${i + 1} fullscreen`}
                          className="group overflow-hidden rounded-xl border border-border transition-colors hover:border-primary/60"
                        >
                          <div className="aspect-square">
                            <img
                              src={im.src}
                              alt={im.alt ?? ""}
                              width={im.width}
                              height={im.height}
                              loading="lazy"
                              decoding="async"
                              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`${COMPANY.whatsapp}?text=${encodeURIComponent(`Hi MAP, I'd like a quote for something like: ${project.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="size-4" aria-hidden /> Ask about a similar project
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-secondary/60 px-6 text-sm font-medium transition-colors hover:border-primary/60"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {project && (
        <Lightbox
          images={project.images}
          index={lightbox}
          title={project.title}
          onClose={() => setLightbox(null)}
          onIndexChange={setLightbox}
        />
      )}
    </>
  );
}
