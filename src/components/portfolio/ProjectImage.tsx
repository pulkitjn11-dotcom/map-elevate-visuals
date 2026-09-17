import { ImageIcon } from "lucide-react";
import type { PortfolioImage, PortfolioProject } from "@/lib/portfolio";
import { categoryLabel } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const SIZES = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

/** Aspect-ratio-preserving lazy image. Reserves space so nothing shifts. */
export function ProjectImage({
  image,
  alt,
  className,
  imgClassName,
  sizes = SIZES,
  priority = false,
}: {
  image: PortfolioImage;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden bg-surface-2", className)}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    >
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes={image.srcSet ? sizes : undefined}
        alt={image.alt ?? alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "absolute inset-0 size-full object-cover",
          imgClassName,
        )}
      />
    </div>
  );
}

/** Clearly-labelled editable slot shown until real photos are added. */
export function PlaceholderTile({
  project,
  ratio = "4 / 3",
  className,
}: {
  project: PortfolioProject;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative grid w-full place-items-center overflow-hidden bg-surface-2 text-center",
        "aspect-[4/3] sm:aspect-[var(--tile-ratio)]",
        className,
      )}
      style={
        {
          "--tile-ratio": ratio,
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 14px, color-mix(in oklab, var(--border) 60%, transparent) 14px 15px)",
        } as React.CSSProperties
      }
    >
      <div className="px-6">
        <span className="mx-auto grid size-12 place-items-center rounded-2xl border border-dashed border-primary/50 bg-primary/10">
          <ImageIcon className="size-5 text-primary" aria-hidden />
        </span>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {categoryLabel(project.category)}
        </p>
        <p className="mt-1.5 text-xs text-muted-foreground/80">Photo slot — real project image pending</p>
      </div>
    </div>
  );
}
