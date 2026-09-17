# MAP Advertising Studio

Build a complete, production-quality multi-page website for Media of Advertising & Publicity (MAP Advertising), Jaipur, India. This is an offline branding and advertising company established in 2013; it must feel original, premium, credible, futuristic, and portfolio-first—NOT a generic creative agency layout.

Brand direction:
- Dark luxury visual system: #0F172A canvas, #111827 translucent glass cards, white headings, #CBD5E1 muted copy, primary #2563EB, sparing high-energy #F97316 accent. Use Space Grotesk headings and Inter body.
- Design language inspired by the restraint, editorial confidence, spacing, polish and interaction quality of Stripe, Apple, Linear and Vercel—not copied. Large typography, generous 8-point spacing, 1280px max content width, 20px rounded glass panels, subtle borders, deliberate blue/orange light effects; do NOT use generic full-page rainbow gradients.
- Use professional imagery evocative of illuminated signs, retail interiors, billboards, vinyl print production and Jaipur streets. Do not include fake team headshots. Use strong art direction, image overlays and visual hierarchy.
- Responsively excellent. Mobile must have a thumb-friendly sticky bottom bar (Call / Get Quote) and a floating WhatsApp button. Use motion tastefully: scroll reveal, gentle counters, glow/lift interactions and media parallax; respect reduced motion.
- Use lucide icons. Clear focus states and good accessibility. Create actual usable navigation and dedicated routes/pages.

Pages and content:
1. Home: premium navbar, hero with headline “Brands people notice. Visibility businesses trust.” and a strong sign/retail visual, CTA buttons “Get Free Quote” and “View Our Work”; trust chips for Established 2013 / GST Registered / MSME Registered; short company intro; impact stats (13+ years, 500+ projects, 50+ business categories, Jaipur & beyond); service cards; industries grid; portfolio preview; why MAP; credible testimonials; client-logo wordmarks; conversion CTA; rich footer.
2. About: company story, founder-story section (without inventing a name), vision, mission, values, 2013-to-now visual timeline and an operational/team capability section.
3. Services index with large image-led cards. Build five individual, content-rich service routes/pages:
   - LED Signages: glow, ACP, LED letters, acrylic, neon, indoor, outdoor
   - In-Shop Branding: wall, floor, window, reception, counter, display systems
   - Outdoor Branding: billboards, hoardings, pole kiosks, wall branding, campaigns
   - Flex Printing: flex boards, vinyl, backlit/frontlit flex, banners
   - Digital Standees: corporate, retail, hotel, hospital, reception.
   Each service page needs relevant hero, benefits, a 4-step delivery process, service FAQ, and quote CTA.
4. Industries: retail, hospitals, schools, colleges, restaurants, hotels, corporate offices, manufacturing, real estate, automobile, government, startups, SMEs. Use a clear grid and relevant value propositions.
5. Portfolio: large, polished masonry gallery (use substantial image cards and category chips), category filters (All / Signages / In-Shop / Outdoor / Print / Displays), project quick-view modal with client/industry/deliverables/gallery. Use realistic but clearly generic project names; no claims as actual named clients.
6. Testimonials: Google-review-style cards, an elegant carousel, and video-testimonial placeholders; label testimonials as representative placeholders until genuine client reviews are supplied.
7. Blog: featured article, category filters/search, concise article cards around branding/signage knowledge, newsletter UI. Make article cards navigate to a well-designed generic article detail/template page.
8. FAQ: animated accessible accordion across pricing, timelines, installation, approvals, maintenance, and geographic coverage.
9. Contact: inquiry form with validation fields (name, phone, business, service, message); office details exactly:
Phone/WhatsApp +91 9829017970
Email map4advertising@gmail.com
Address: 7 Gangwal Park, Behind SMS Medical College, JLN Road, Jaipur, Rajasthan, India
Include an embedded map-style location panel that links to Google Maps search rather than pretending an exact embed. CTA to download company profile; since the actual PDF is unavailable, gracefully label it “Company profile — coming soon” and preserve a button pattern. Make phone/mail/WhatsApp links functional (WhatsApp uses wa.me/919829017970). The form should give a polished local success state and direct prospects to WhatsApp; do not falsely claim it sends email.
Across pages include prominent quote/WhatsApp paths and an accessible footer with quick links, services, contacts, GST/MSME labels and copyright.

Technical quality:
- Implement in TypeScript/React with Tailwind and Framer Motion where appropriate.
- Create a coherent component system rather than a single long page.
- Include client-side route metadata/update for SEO where supported: unique title and description per page, Open Graph/Twitter tags, local-business JSON-LD and breadcrumbs (especially services). Include keyword-aware natural copy targeting Advertising Company Jaipur, Branding Company Jaipur, LED Sign Board Jaipur, Outdoor Advertising Jaipur, Signage Company Jaipur, Shop Branding Jaipur.
- Build smooth links / page transitions, image lazy loading, and avoid excessive text. 
- Treat missing assets such as actual client logos, founder name/photo, reviews, final portfolio photos, and company PDF transparently with graceful placeholders and a content note where needed.
Deliver a visual, navigable finished site now.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://map-elevate-visuals.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d8f45e20-ff92-4084-8b98-075e568f4ccf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
