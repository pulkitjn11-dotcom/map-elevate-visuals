/**
 * PORTFOLIO DATA
 * --------------
 * All portfolio content lives in this single file. Components read from it,
 * so adding 50+ real projects never requires touching a component.
 *
 * HOW TO ADD REAL PHOTOS
 * 1. Unzip your photo archive into `public/portfolio/` keeping one folder per
 *    category (see `PORTFOLIO_CATEGORIES[].folder`), e.g.
 *      public/portfolio/01-led-signages/showroom-front.jpg
 * 2. Replace a placeholder below (or add a new entry) and list its images with
 *    `img("led-signages", "showroom-front.jpg", 1600, 1200)`.
 *    Width/height are the real pixel dimensions — they preserve the aspect
 *    ratio and prevent layout shift while the photo lazy-loads.
 * 3. Optional: set `featured: true` to show a project on the homepage.
 *
 * Entries with an empty `images` array render as clearly-labelled placeholder
 * slots. No stock imagery is used for portfolio items.
 */

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
  /** Public URL, e.g. /portfolio/01-led-signages/photo.jpg */
  src: string;
  /** Real pixel width — keeps aspect ratio stable before load */
  width: number;
  /** Real pixel height */
  height: number;
  alt?: string;
  /** Optional responsive sources, e.g. "/p/a-800.jpg 800w, /p/a-1600.jpg 1600w" */
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

/** Build an image entry from a filename inside the category folder. */
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

/** Placeholder slot — swap `images: []` for real photos. */
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

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // ── 01 LED Signages ───────────────────────────────────────────────
  slot("led-signages", 1, true),
  slot("led-signages", 2),
  slot("led-signages", 3),
  // ── 02 In-Shop Branding ───────────────────────────────────────────
  slot("in-shop-branding", 1, true),
  slot("in-shop-branding", 2),
  // ── 03 Outdoor Branding ───────────────────────────────────────────
  slot("outdoor-branding", 1, true),
  slot("outdoor-branding", 2),
  // ── 04 Flex & Banners ─────────────────────────────────────────────
  slot("flex-banners", 1, true),
  slot("flex-banners", 2),
  // ── 05 Digital Signage ────────────────────────────────────────────
  slot("digital-signage", 1, true),
  slot("digital-signage", 2),
  // ── 06 Other Branding ─────────────────────────────────────────────
  slot("other-branding", 1, true),
  slot("other-branding", 2),

  /* Example of a fully filled entry (uncomment and edit once photos exist):
  {
    id: "led-signages-showroom-front",
    title: "Showroom front-lit LED letters",
    category: "led-signages",
    industry: "Retail",
    location: "Jaipur, Rajasthan",
    client: "Optional client name",
    description: "Optional short description of the work.",
    featured: true,
    images: [
      img("led-signages", "showroom-front-01.jpg", 1600, 1200, "Front view of the LED letters at night"),
      img("led-signages", "showroom-front-02.jpg", 1200, 1600),
    ],
  },
  */
];

export const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.filter((p) => p.featured);

export const hasImages = (p: PortfolioProject) => p.images.length > 0;
export const coverOf = (p: PortfolioProject): PortfolioImage | undefined => p.images[0];
