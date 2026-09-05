import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { PortfolioImage } from "@/lib/portfolio";

export function Lightbox({
  images,
  index,
  title,
  onClose,
  onIndexChange,
}: {
  images: PortfolioImage[];
  index: number | null;
  title: string;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;
  const touchX = useRef<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null || images.length < 2) return;
      onIndexChange((index + dir + images.length) % images.length);
    },
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, go, onClose]);

  useEffect(() => setLoaded(false), [index]);

  // Preload neighbours so next/prev feel instant.
  useEffect(() => {
    if (index === null) return;
    [index + 1, index - 1].forEach((i) => {
      const im = images[(i + images.length) % images.length];
      if (im) new Image().src = im.src;
    });
  }, [index, images]);

  const current = index !== null ? images[index] : undefined;

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — image ${index! + 1} of ${images.length}`}
          className="fixed inset-0 z-[80] flex flex-col bg-background/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
          onTouchEnd={(e) => {
            const start = touchX.current;
            const end = e.changedTouches[0]?.clientX;
            if (start !== null && end !== undefined && Math.abs(end - start) > 48) go(end < start ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
            <p className="truncate text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{title}</span>
              {images.length > 1 && (
                <span className="ml-3 tabular-nums">
                  {index! + 1} / {images.length}
                </span>
              )}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close fullscreen gallery"
              className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-surface/70"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-4 md:px-16">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={current.src}
                src={current.src}
                srcSet={current.srcSet}
                sizes="100vw"
                alt={current.alt ?? title}
                width={current.width}
                height={current.height}
                decoding="async"
                onLoad={() => setLoaded(true)}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: loaded ? 1 : 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="max-h-full max-w-full select-none rounded-lg object-contain shadow-2xl"
                style={{ aspectRatio: `${current.width} / ${current.height}` }}
                draggable={false}
              />
            </AnimatePresence>
            {!loaded && (
              <span
                aria-hidden
                className="absolute size-8 animate-spin rounded-full border-2 border-border border-t-primary"
              />
            )}

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-surface/70 backdrop-blur transition-colors hover:border-primary/60 md:grid"
                >
                  <ChevronLeft className="size-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-surface/70 backdrop-blur transition-colors hover:border-primary/60 md:grid"
                >
                  <ChevronRight className="size-5" aria-hidden />
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex items-center justify-center gap-4 px-4 pb-5 md:hidden" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="grid size-11 place-items-center rounded-full border border-border bg-surface/70"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <span className="text-xs text-muted-foreground">Swipe to browse</span>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="grid size-11 place-items-center rounded-full border border-border bg-surface/70"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
