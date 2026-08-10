import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, Mail } from "lucide-react";
import { BLOG_POSTS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageMeta({
      title: "Signage & Branding Insights | MAP Advertising Blog, Jaipur",
      description:
        "Practical articles on LED sign boards, shop branding, outdoor hoardings and large-format print from a Jaipur signage company with 13+ years on site.",
      path: "/blog",
    }),
  component: Blog;
});

function Blog() {
  return null;
}
