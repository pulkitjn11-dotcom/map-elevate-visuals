import { motion } from "framer-motion";
import { ArrowUpRight, Images } from "lucide-react";
import { categoryLabel, hasImages, type PortfolioProject } from "@/lib/portfolio";
import { PlaceholderTile, ProjectImage } from "./ProjectImage";

export function ProjectCard({
  project,
  onOpen,
  index = 0,
  animate = true,
}: {
  project: PortfolioProject;
  onOpen: (p: PortfolioProject) => void;
  index?: number;
  animate?: boolean;
}) {
  const cover = project.images[0];
  const subtitle = [project.industry, project.location].filter(Boolean).join(" · ");

  return (
    <motion.button
      type="button"
      layout={animate}
      initial={animate ? { opacity: 0, y: 16 } : false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
      onClick={() => onOpen(project)}
      className="group relative block w-full overflow-hidden rounded-[20px] border border-border bg-surface text-left transition-colors hover:border-primary/50 focus-visible:border-primary"
      aria-label={`View ${project.title}`}
    >
      {cover ? (
        <ProjectImage
          image={cover}
          alt={project.title}
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <PlaceholderTile project={project} ratio={index % 3 === 1 ? "3 / 4" : "4 / 3"} />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground backdrop-blur">
        {categoryLabel(project.category)}
      </span>
      {project.images.length > 1 && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] text-muted-foreground backdrop-blur">
          <Images className="size-3" aria-hidden /> {project.images.length}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
        <div className="min-w-0">
          <h3 className="truncate font-display text-base font-semibold sm:text-lg">{project.title}</h3>
          {subtitle ? (
            <p className="mt-1 truncate text-xs text-muted-foreground">{subtitle}</p>
          ) : (
            !hasImages(project) && (
              <p className="mt-1 text-xs text-muted-foreground/80">Editable placeholder slot</p>
            )
          )}
        </div>
        <ArrowUpRight
          className="size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          aria-hidden
        />
      </div>
    </motion.button>
  );
}
