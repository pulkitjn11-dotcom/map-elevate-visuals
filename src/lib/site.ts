import svcLed from "@/assets/svc-led.jpg";
import svcInshop from "@/assets/svc-inshop.jpg";
import svcOutdoor from "@/assets/svc-outdoor.jpg";
import svcFlex from "@/assets/svc-flex.jpg";
import svcStandee from "@/assets/svc-standee.jpg";
import pfHospital from "@/assets/pf-hospital.jpg";
import pfWall from "@/assets/pf-wall.jpg";
import workshop from "@/assets/workshop.jpg";
import jaipur from "@/assets/jaipur-street.jpg";

export const COMPANY = {
  name: "Media of Advertising & Publicity",
  short: "MAP Advertising",
  founded: 2013,
  phone: "+91 9829017970",
  phoneRaw: "+919829017970",
  whatsapp: "https://wa.me/919829017970",
  email: "map4advertising@gmail.com",
  address:
    "7 Gangwal Park, Behind SMS Medical College, JLN Road, Jaipur, Rajasthan, India",
  mapsSearch:
    "https://www.google.com/maps/search/?api=1&query=7+Gangwal+Park+Behind+SMS+Medical+College+JLN+Road+Jaipur+Rajasthan",
};

export const IMAGES = {
  svcLed,
  svcInshop,
  svcOutdoor,
  svcFlex,
  svcStandee,
  pfHospital,
  pfWall,
  workshop,
  jaipur,
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  intro: string;
  image: string;
  keywords: string[];
  offerings: { title: string; body: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "led-signages",
    title: "LED Signages",
    short: "Glow signs, ACP cladding, LED letters, acrylic and neon.",
    tagline: "Signage that reads clearly at 100 metres — and still looks premium up close.",
    intro:
      "Illuminated signage is the single highest-return branding investment for a storefront. As a signage company in Jaipur working since 2013, we design, fabricate and install LED sign boards that survive Rajasthan heat, dust and monsoon while holding colour and brightness for years.",
    image: svcLed,
    keywords: ["LED Sign Board Jaipur", "Glow Sign Board", "ACP Signage Jaipur"],
    offerings: [
      { title: "LED glow sign boards", body: "Even-lit acrylic faces with high-CRI modules and IP-rated drivers." },
      { title: "ACP cladding & frames", body: "Aluminium composite fascia in matte, brushed and premium finishes." },
      { title: "3D LED letters", body: "Front-lit, back-lit halo and edge-lit channel letters in steel or acrylic." },
      { title: "Acrylic & neon", body: "Cast acrylic build-ups and flexible LED neon for interiors and facades." },
      { title: "Indoor signage", body: "Reception logos, wayfinding and lightbox panels for controlled interiors." },
      { title: "Outdoor signage", body: "Weather-sealed structures engineered for wind load and long service life." },
    ],
    benefits: [
      "Higher walk-in visibility after dark",
      "Consistent brand colour across every outlet",
      "Low-power LED modules with lower running cost",
      "Serviceable design — modules replaceable on site",
    ],
    faqs: [
      { q: "How long does an LED sign board take?", a: "Most storefront boards are surveyed, fabricated and installed in 7–12 working days after artwork approval." },
      { q: "What warranty do you offer?", a: "Fabrication and electricals typically carry a service warranty; exact terms are confirmed in your written quotation." },
      { q: "Do you handle multi-outlet rollouts?", a: "Yes. We standardise specification once, then produce and install outlet by outlet on a schedule." },
    ],
  },
  {
    slug: "in-shop-branding",
    title: "In-Shop Branding",
    short: "Wall, floor, window, reception, counter and display systems.",
    tagline: "Turn the ten seconds after someone walks in into a brand impression.",
    intro:
      "In-shop branding controls how a customer moves, what they notice and what they remember. We plan the interior brand journey — entrance, walkway, counter, product zone — and produce every element with matched materials and finish.",
    image: svcInshop,
    keywords: ["Shop Branding Jaipur", "Retail Branding Jaipur"],
    offerings: [
      { title: "Wall graphics", body: "Seamless printed panels, laminated vinyl and acrylic build-ups." },
      { title: "Floor branding", body: "Anti-skid laminated floor graphics for walkways and promo zones." },
      { title: "Window & glass", body: "Frosted films, one-way vision and cut-vinyl storefront messaging." },
      { title: "Reception branding", body: "Backlit logos, metal letters and textured feature walls." },
      { title: "Counter & POS", body: "Branded counter fascias, danglers, standees and shelf strips." },
      { title: "Display systems", body: "Modular panels and light boxes that swap graphics season to season." },
    ],
    benefits: [
      "A consistent look across every zone of the store",
      "Faster campaign swaps with modular systems",
      "Materials chosen for cleaning and daily wear",
      "Installation scheduled outside business hours",
    ],
    faqs: [
      { q: "Can you work in a live store?", a: "Yes — most interior work is executed at night or on low-footfall days to avoid downtime." },
      { q: "Do you provide the design?", a: "We can work from your brand guidelines or design the entire in-store system in-house." },
      { q: "How durable are floor graphics?", a: "With anti-skid lamination they typically hold up 6–18 months depending on footfall." },
    ],
  },
  {
    slug: "outdoor-branding",
    title: "Outdoor Branding",
    short: "Billboards, hoardings, pole kiosks, wall branding and campaigns.",
    tagline: "City-scale presence, planned around where your customers actually travel.",
    intro:
      "Outdoor advertising in Jaipur works when placement, size and message are matched to traffic behaviour. We handle site planning, fabrication, printing, permissions coordination and installation for single sites or full campaigns.",
    image: svcOutdoor,
    keywords: ["Outdoor Advertising Jaipur", "Hoarding Advertising Jaipur"],
    offerings: [
      { title: "Billboards & hoardings", body: "Structure fabrication, skinning and periodic creative changes." },
      { title: "Pole kiosks", body: "Repeat-frequency arterial road units for route-based visibility." },
      { title: "Wall branding", body: "Large-format painted and printed wall media in high-traffic corridors." },
      { title: "Unipoles & gantries", body: "Premium high-rise formats for landmark presence." },
      { title: "Campaign management", body: "Multi-site planning, mounting schedules and monitoring photos." },
      { title: "Transit & event media", body: "Vehicle branding, canopies, backdrops and activation setups." },
    ],
    benefits: [
      "Placement advice grounded in local traffic knowledge",
      "Print built for sun, wind and monsoon exposure",
      "Documented installation with site photographs",
      "Coordinated multi-site campaign go-live",
    ],
    faqs: [
      { q: "Do you help with permissions?", a: "We coordinate the documentation typically required by local authorities and site owners; approval remains with the authority." },
      { q: "Can you refresh creatives on existing sites?", a: "Yes, re-skinning existing structures is a routine job for us." },
      { q: "What is the minimum campaign size?", a: "There is no fixed minimum — single-site work is welcome." },
    ],
  },
  {
    slug: "flex-printing",
    title: "Flex Printing",
    short: "Flex boards, vinyl, backlit and frontlit flex, banners.",
    tagline: "Large-format print with colour you can hold to a brand guide.",
    intro:
      "Our print work covers everything from a single event banner to hundreds of square feet of backlit flex. Colour is profiled, edges are finished properly and every job is checked before it leaves production.",
    image: svcFlex,
    keywords: ["Flex Printing Jaipur", "Banner Printing Jaipur"],
    offerings: [
      { title: "Flex boards", body: "Framed and unframed boards in standard and heavy GSM material." },
      { title: "Star / vinyl print", body: "High-resolution vinyl with gloss, matte or anti-scratch lamination." },
      { title: "Backlit flex", body: "Translucent media tuned for even brightness inside light boxes." },
      { title: "Frontlit flex", body: "Durable outdoor media for hoardings and facade boards." },
      { title: "Banners & standees", body: "Eyelet banners, roll-ups and X-stands for events and stores." },
      { title: "Finishing", body: "Welding, eyelets, framing, mounting and site delivery." },
    ],
    benefits: [
      "Colour-managed output across repeat orders",
      "Same-day turnaround possible on urgent jobs",
      "Correct media choice for indoor vs outdoor life",
      "Clean finishing that survives handling and wind",
    ],
    faqs: [
      { q: "What resolution should artwork be?", a: "Supply vector artwork where possible, or raster at 72–150 DPI at final print size." },
      { q: "How fast can you print?", a: "Standard banners often ship same or next day; large campaigns are scheduled." },
      { q: "Do you deliver outside Jaipur?", a: "Yes, we dispatch across Rajasthan and to nearby states." },
    ],
  },
  {
    slug: "digital-standees",
    title: "Digital Standees",
    short: "Corporate, retail, hotel, hospital and reception displays.",
    tagline: "One screen, unlimited campaigns — content you can change from your desk.",
    intro:
      "Digital standees replace printed posters with a screen you update whenever the offer changes. We supply, brand, install and configure floor-standing and wall-mounted displays with looped or scheduled content.",
    image: svcStandee,
    keywords: ["Digital Standee Jaipur", "Digital Signage Jaipur"],
    offerings: [
      { title: "Corporate lobbies", body: "Welcome boards, announcements and visitor messaging." },
      { title: "Retail floors", body: "Offer loops, product highlights and queue-side promotion." },
      { title: "Hotels", body: "Event boards, directions and banquet-hall scheduling screens." },
      { title: "Hospitals", body: "Department wayfinding, token displays and awareness content." },
      { title: "Reception units", body: "Slim floor standees in brand-matched finishes." },
      { title: "Content setup", body: "Playlist configuration, templates and handover training." },
    ],
    benefits: [
      "No reprint cost for every campaign change",
      "Motion content that outperforms static posters",
      "Central scheduling across multiple locations",
      "Brand-finished enclosures, not generic hardware",
    ],
    faqs: [
      { q: "Can we update content ourselves?", a: "Yes — we hand over a simple workflow and train your team during installation." },
      { q: "Do screens work all day?", a: "We specify commercial-grade panels rated for extended daily operation." },
      { q: "Do you provide content design?", a: "We can design templates and creatives alongside the hardware." },
    ],
  },
];

export const INDUSTRIES = [
  { name: "Retail & Showrooms", value: "Storefront glow signs and in-shop systems that lift walk-ins." },
  { name: "Hospitals & Clinics", value: "Clear wayfinding, department boards and calm, compliant signage." },
  { name: "Schools", value: "Entrance identity, notice systems and campus direction boards." },
  { name: "Colleges & Institutes", value: "Admission campaigns, hoardings and campus branding." },
  { name: "Restaurants & Cafés", value: "Menu boards, neon accents and facade signage that pull footfall." },
  { name: "Hotels & Resorts", value: "Lobby identity, digital standees and event signage." },
  { name: "Corporate Offices", value: "Reception logos, floor directories and meeting-room signage." },
  { name: "Manufacturing", value: "Gate boards, safety signage and plant-wide identification." },
  { name: "Real Estate", value: "Site hoardings, project boards and launch campaigns." },
  { name: "Automobile", value: "Showroom fascia, service-bay branding and dealership standards." },
  { name: "Government & Civic", value: "Tender-grade boards, public information and campaign media." },
  { name: "Startups", value: "Fast, affordable first-office and first-store branding kits." },
  { name: "SMEs & Traders", value: "Practical shop boards and print that fit a working budget." },
];

export type Project = {
  id: string;
  name: string;
  category: "Signages" | "In-Shop" | "Outdoor" | "Print" | "Displays";
  industry: string;
  image: string;
  span: "tall" | "wide" | "normal";
  deliverables: string[];
  summary: string;
};

export const PROJECTS: Project[] = [
  { id: "p1", name: "Flagship Storefront Identity", category: "Signages", industry: "Retail", image: svcLed, span: "wide", deliverables: ["3D LED letters", "ACP fascia", "Night survey", "Installation"], summary: "A full facade rebuild for a high-street retail outlet: ACP cladding, halo-lit letters and a controlled night-time light level." },
  { id: "p2", name: "Multi-Speciality Wayfinding Program", category: "In-Shop", industry: "Healthcare", image: pfHospital, span: "normal", deliverables: ["Reception backlit logo", "Floor directory", "Department boards"], summary: "A calm, legible wayfinding system across reception and three patient floors." },
  { id: "p3", name: "Arterial Road Campaign", category: "Outdoor", industry: "Real Estate", image: svcOutdoor, span: "normal", deliverables: ["Hoarding skinning", "Pole kiosks", "Monitoring photos"], summary: "A route-based launch campaign combining one landmark hoarding with repeat pole kiosks." },
  { id: "p4", name: "Tower Wall Wrap", category: "Outdoor", industry: "Corporate", image: pfWall, span: "tall", deliverables: ["Wall media", "Structure survey", "Rope-access install"], summary: "A vertical facade wrap engineered for wind load and viewed from three approach roads." },
  { id: "p5", name: "Concept Store Interior System", category: "In-Shop", industry: "Retail", image: svcInshop, span: "wide", deliverables: ["Wall graphics", "Counter fascia", "Window vinyl", "Cove lighting"], summary: "An interior brand journey from entrance vinyl to a lit counter and modular display panels." },
  { id: "p6", name: "Seasonal Print Rollout", category: "Print", industry: "FMCG", image: svcFlex, span: "normal", deliverables: ["Backlit flex", "Banners", "Standees"], summary: "A colour-managed print rollout delivered to 40 locations within one campaign window." },
  { id: "p7", name: "Hotel Lobby Display Program", category: "Displays", industry: "Hospitality", image: svcStandee, span: "normal", deliverables: ["Digital standees", "Content templates", "Team training"], summary: "Floor-standing digital units replacing printed event boards across a lobby and banquet wing." },
  { id: "p8", name: "Old City Shopfront Series", category: "Signages", industry: "SME Retail", image: jaipur, span: "wide", deliverables: ["Glow sign boards", "Acrylic letters", "On-site fitting"], summary: "A series of compact shop boards designed to stay readable in a dense heritage streetscape." },
  { id: "p9", name: "Fabrication Floor Standards", category: "Print", industry: "Manufacturing", image: workshop, span: "normal", deliverables: ["Safety signage", "Gate board", "Zone markings"], summary: "Plant-wide identification and safety signage produced to a single specification sheet." },
];

export const PROJECT_CATEGORIES = ["All", "Signages", "In-Shop", "Outdoor", "Print", "Displays"] as const;

export const TESTIMONIALS = [
  { name: "Retail Owner", role: "Fashion showroom, C-Scheme", rating: 5, text: "The new glow sign changed how the shop reads from the road at night. Measured, fabricated and installed without disturbing business hours." },
  { name: "Facility Manager", role: "Multi-speciality hospital", rating: 5, text: "Wayfinding was planned floor by floor. Patients stopped asking reception for directions within a week." },
  { name: "Marketing Head", role: "Real estate developer", rating: 5, text: "Site hoardings went up on schedule for the launch weekend, with photographs of every unit shared the same evening." },
  { name: "Restaurant Partner", role: "Café chain", rating: 5, text: "Neon and menu boards matched our brand palette exactly across three outlets — that consistency is hard to get locally." },
  { name: "Operations Lead", role: "Corporate office", rating: 4, text: "Reception logo, floor directory and meeting-room plates were delivered as one coordinated set. Clean finish." },
  { name: "Proprietor", role: "Automobile service centre", rating: 5, text: "Practical advice on material choice saved us cost without making the board look cheap." },
];

export const BLOG_POSTS = [
  { slug: "led-sign-board-cost-jaipur", title: "What decides the cost of an LED sign board in Jaipur", category: "Signage", read: "6 min", excerpt: "Size, face material, lighting method and structure — the four variables that move a signage quotation more than anything else.", image: svcLed, featured: true },
  { slug: "acp-vs-acrylic", title: "ACP vs acrylic: choosing the right signage face", category: "Materials", read: "5 min", excerpt: "A practical comparison of finish, weather life, cost and how each material handles illumination.", image: svcInshop },
  { slug: "hoarding-placement", title: "How to choose hoarding locations that actually convert", category: "Outdoor", read: "7 min", excerpt: "Dwell time, approach speed and sight-line beat raw footfall numbers when picking outdoor sites.", image: svcOutdoor },
  { slug: "shop-branding-checklist", title: "A shop branding checklist before you open", category: "Retail", read: "4 min", excerpt: "Seven branding elements to lock before your launch date, in the order they should be produced.", image: svcInshop },
  { slug: "flex-print-quality", title: "Why two flex prints of the same file look different", category: "Print", read: "5 min", excerpt: "Colour profiles, media choice and lamination explain most print variation between vendors.", image: svcFlex },
  { slug: "digital-vs-printed-standee", title: "Digital standee or printed poster: which pays back faster", category: "Displays", read: "6 min", excerpt: "A simple way to compare a one-time screen cost against recurring print for changing campaigns.", image: svcStandee },
  { slug: "signage-maintenance", title: "Maintaining outdoor signage through a Rajasthan year", category: "Maintenance", read: "5 min", excerpt: "Heat, dust and monsoon each attack signage differently. A short seasonal maintenance routine.", image: workshop },
];

export const FAQS = [
  { cat: "Pricing", q: "How is a signage quotation calculated?", a: "Quotations are built from size, face and frame material, lighting method, structure or mounting requirement and site conditions. We share an itemised written quotation so you can see what each part costs." },
  { cat: "Pricing", q: "Do you offer options at different budgets?", a: "Yes. For most jobs we can propose a premium and a value specification that keep the same design intent with different materials." },
  { cat: "Timelines", q: "How quickly can work start?", a: "Site survey is usually within 24–48 hours in Jaipur. Production begins once artwork and quotation are approved." },
  { cat: "Timelines", q: "What is a typical delivery time?", a: "Banners and print: 1–3 days. Storefront LED signage: 7–12 working days. Multi-site campaigns are scheduled after survey." },
  { cat: "Installation", q: "Do you install, or only supply?", a: "We install. Our own teams handle mounting, electricals and finishing, including night and holiday slots for live premises." },
  { cat: "Installation", q: "Can you work at height?", a: "Yes — facade, gantry and tower work is executed with appropriate access equipment and safety practice." },
  { cat: "Approvals", q: "Do you handle municipal approvals?", a: "We coordinate the documentation usually required by authorities and property owners. Final approval always rests with the concerned authority." },
  { cat: "Approvals", q: "Are you a registered business?", a: "Yes. MAP Advertising is GST registered and MSME registered, and has been operating since 2013." },
  { cat: "Maintenance", q: "Do you service signage after installation?", a: "Yes. LED modules, drivers and panels are designed to be serviceable on site, and we offer periodic maintenance visits." },
  { cat: "Maintenance", q: "What if a board is damaged in a storm?", a: "Contact us on WhatsApp with photographs — we assess and quote a repair or replacement quickly." },
  { cat: "Coverage", q: "Which areas do you cover?", a: "All of Jaipur, and project work across Rajasthan and neighbouring states for campaigns and rollouts." },
  { cat: "Coverage", q: "Can you support multi-city rollouts?", a: "Yes, with a single specification sheet and scheduled installation per location." },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
