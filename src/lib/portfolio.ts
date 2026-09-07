/**
 * PORTFOLIO DATA
 * --------------
 * Real project photos live as CDN assets under `src/assets/portfolio/<category>/`
 * (uploaded via `lovable-assets`). This file loads every `.asset.json` pointer
 * automatically — adding more photos later only requires uploading the file and
 * adding its dimensions to `src/lib/portfolio-dims.ts`.
 *
 * Categories with no photos yet render clearly-labelled placeholder slots.
 * No stock imagery is used for portfolio items.
 */

import { PHOTO_DIMS } from "./portfolio-dims";

export const PORTFOLIO_CATEGORIES = [
  { id: "led-signages", label: "LED Signages", folder: "01-led-signages", zipFolder: "01 LED Signages" },
  { id: "in-shop-branding", label: "In-Shop Branding", folder: "02-in-shop-branding", zipFolder: "02 In-Shop Branding" },
  { id: "outdoor-branding", label: "Outdoor Branding", folder: "03-outdoor-branding", zipFolder: "03 Outdoor Branding" },
  { id: "flex-banners", label: "Flex & Banners", folder: "04-flex-banners", zipFolder: "04 Flex & Banners" },
  { id: "digital-signage", label: "Digital Signage", folder: "05-digital-signage", zipFolder: "05 Digital Signage" },
  { id: "other-branding", label: "Other Branding", folder: "06-other-branding", zipFolder: "06 Other Branding" },
] as const;

export type PortfolioCategoryId = (typeof PORTFOLIO_CATEGORIES)[number]["id"];

export type PortfolioImage = {
  /** Public URL (CDN asset or /portfolio/... path) */
  src: string;
  width: number;
  height: number;
  alt?: string;
  srcSet?: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  category: PortfolioCategoryId;
  industry?: string;
  location?: string;
  client?: string;
  description?: string;
  featured?: boolean;
  /** First image is the cover. Empty array = placeholder slot. */
  images: PortfolioImage[];
};

/** Build an image entry from a filename inside a public category folder. */
export function img(
  category: PortfolioCategoryId,
  file: string,
  width: number,
  height: number,
  alt?: string,
): PortfolioImage {
  const folder = PORTFOLIO_CATEGORIES.find((c) => c.id === category)!.folder;
  const image: PortfolioImage = { src: `/portfolio/${folder}/${file}`, width, height };
  if (alt) image.alt = alt;
  return image;
}

export const categoryLabel = (id: PortfolioCategoryId) =>
  PORTFOLIO_CATEGORIES.find((c) => c.id === id)?.label ?? id;

/** Placeholder slot — replaced automatically once a category has real photos. */
const slot = (
  category: PortfolioCategoryId,
  n: number,
  featured = false,
): PortfolioProject => ({
  id: `${category}-${String(n).padStart(2, "0")}`,
  title: `${categoryLabel(category)} · Project ${String(n).padStart(2, "0")}`,
  category,
  featured,
  images: [],
});

/* ── Real photos from the uploaded archives (CDN asset pointers) ────────── */

type AssetPointer = { url: string; original_filename: string };

const pointers = import.meta.glob("../assets/portfolio/**/*.asset.json", {
  eager: true,
  import: "default",
}) as Record<string, AssetPointer>;

const photosByCategory = new Map<PortfolioCategoryId, PortfolioImage[]>();
for (const [path, pointer] of Object.entries(pointers)) {
  const parts = path.split("/");
  const category = (parts[parts.length - 2] ?? "") as PortfolioCategoryId;
  const file = (parts[parts.length - 1] ?? "").replace(/\.asset\.json$/, "");
  const dims = PHOTO_DIMS[file] ?? { w: 1600, h: 1200 };
  const label = categoryLabel(category);
  const list = photosByCategory.get(category) ?? [];
  list.push({ src: pointer.url, width: dims.w, height: dims.h, alt: `${label} work by MAP Advertising, Jaipur` });
  photosByCategory.set(category, list);
}
for (const list of photosByCategory.values()) list.sort((a, b) => a.src.localeCompare(b.src));

/** Chunk a category's photos into projects (photo sets) of up to `size` images. */
function setsFromPhotos(
  category: PortfolioCategoryId,
  photos: PortfolioImage[],
  size = 8,
): PortfolioProject[] {
  const label = categoryLabel(category);
  const projects: PortfolioProject[] = [];
  for (let i = 0; i < photos.length; i += size) {
    const n = projects.length + 1;
    projects.push({
      id: `${category}-set-${String(n).padStart(2, "0")}`,
      title: `${label} · Set ${String(n).padStart(2, "0")}`,
      category,
      location: "Jaipur, Rajasthan",
      featured: n === 1,
      images: photos.slice(i, i + size),
    });
  }
  return projects;
}

const realProjects: PortfolioProject[] = PORTFOLIO_CATEGORIES.flatMap((c) =>
  setsFromPhotos(c.id, photosByCategory.get(c.id) ?? []),
);

/** Placeholder slots only for categories that have no photos yet. */
const placeholderSlots: PortfolioProject[] = PORTFOLIO_CATEGORIES.flatMap((c) =>
  photosByCategory.has(c.id) ? [] : [slot(c.id, 1, true), slot(c.id, 2)],
);

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [...realProjects, ...placeholderSlots];

export const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.filter((p) => p.featured);

export const hasImages = (p: PortfolioProject) => p.images.length > 0;
export const coverOf = (p: PortfolioProject): PortfolioImage | undefined => p.images[0];
