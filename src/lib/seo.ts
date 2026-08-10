import { COMPANY } from "./site";

const SITE_NAME = "MAP Advertising — Media of Advertising & Publicity, Jaipur";

export function pageMeta({
  title,
  description,
  path,
  type = "website",
  image,
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
  image?: string;
}) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(image ? [{ name: "twitter:image", content: image }] : []),
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

export const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  alternateName: COMPANY.short,
  description:
    "Advertising and branding company in Jaipur since 2013 — LED signages, in-shop branding, outdoor hoardings, flex printing and digital standees.",
  telephone: COMPANY.phone,
  email: COMPANY.email,
  foundingDate: "2013",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 Gangwal Park, Behind SMS Medical College, JLN Road",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  areaServed: "Jaipur, Rajasthan, India",
};

export function breadcrumbLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}
