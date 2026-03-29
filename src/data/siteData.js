export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Barlow Condensed", body: "Inter", display: "Barlow Condensed" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "energetic",
  serviceCardStyle: "overlay",
  projectGridStyle: "bento",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "dots",
  homeSectionOrder: ["hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"],
};

const siteData = {
  business: {
    name: "Otto Transport Services",
    legalName: "Otto Transport Services (Pvt) Ltd",
    tagline: "Moving Zimbabwe Forward",
    description: "Premier trucking and haulage company delivering freight, bulk cargo, and specialized transport solutions across Zimbabwe and the SADC region.",
    phone: "", phoneRaw: "", whatsappNumber: "",
    email: "info@ottotransport.co.zw",
    address: "Harare, Zimbabwe", country: "Zimbabwe", city: "Harare",
    rating: 4.5, ratingRounded: 5, reviewCount: 34,
    established: "2011", yearsExperience: "13+", projectsCompleted: "10000+", employees: "120+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [{ day: "Monday - Friday", time: "6:00 AM - 6:00 PM" }, { day: "Saturday", time: "7:00 AM - 2:00 PM" }, { day: "Sunday", time: "Emergency Only" }],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "otto-transport-cookie-consent",
    socialLinks: { facebook: "#", linkedin: "#", instagram: "#" },
  },

  navbar: { logoLine1: "Otto", logoLine2: "Transport" },

  hero: {
    badge: "Zimbabwe's Haulage Specialists",
    titleParts: [{ text: "Moving " }, { text: "Zimbabwe", highlight: true }, { text: " Forward" }],
    subtitle: "From single-load deliveries to full fleet contracts, we move freight across Zimbabwe and the SADC region with speed, safety, and accountability.",
    ctaPrimary: "Get a Freight Quote",
    ctaSecondary: "Our Fleet",
    trustBadge: "CVR Licensed",
    backgroundImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920",
    backgroundAlt: "Fleet of heavy-duty trucks on a highway at sunrise",
  },

  stats: [
    { number: "10000+", label: "Loads Delivered" },
    { number: "4.5", label: "Client Rating" },
    { number: "13+", label: "Years on the Road" },
    { number: "120+", label: "Team Members" },
  ],

  servicesPreview: [
    { iconName: "Car", title: "General Freight", desc: "Door-to-door freight delivery for palletized goods, FMCG, industrial supplies, and general cargo across Zimbabwe." },
    { iconName: "Wrench", title: "Bulk Haulage", desc: "High-volume transport of mining ore, agricultural commodities, fuel, and construction materials in tipper and tanker trucks." },
    { iconName: "RoadHorizon", title: "Cross-Border Transport", desc: "SADC corridor transport to South Africa, Zambia, Mozambique, and Botswana with customs clearance support." },
    { iconName: "HardHat", title: "Abnormal Loads", desc: "Specialized transport for oversized and heavy indivisible loads with escort vehicles and route planning." },
    { iconName: "ChartLineUp", title: "Contract Logistics", desc: "Dedicated fleet contracts for mining, manufacturing, and retail clients with guaranteed vehicle availability." },
    { iconName: "Buildings", title: "Warehousing", desc: "Secure warehousing and distribution center operations with pick-and-pack and last-mile delivery." },
  ],

  featuredProjects: [
    { image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800", title: "Mining Ore Haulage", category: "Bulk Haulage" },
    { image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800", title: "SADC Corridor Transport", category: "Cross-Border" },
    { image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800", title: "FMCG Distribution", category: "General Freight" },
  ],

  whyChooseUs: {
    titleParts: [{ text: "The Fleet " }, { text: "Zimbabwe", highlight: true }, { text: " Depends On" }],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800",
    imageAlt: "Otto Transport fleet lined up at the depot",
    experienceYears: "13+",
    experienceLabel: "Years on the Road",
    points: [
      { title: "GPS-Tracked Fleet", desc: "Every vehicle is GPS-tracked with live updates. Know exactly where your load is, any time, anywhere." },
      { title: "On-Time Guarantee", desc: "98% on-time delivery rate across all routes. We plan for delays before they happen." },
      { title: "Fully Insured", desc: "All cargo is covered by comprehensive goods-in-transit insurance for complete peace of mind." },
      { title: "Driver Excellence", desc: "Every driver is trained, licensed, and monitored. No unauthorized stops, no detours, no excuses." },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920",
    backgroundAlt: "Truck convoy on a highway",
    titleParts: [{ text: "Need to Move " }, { text: "Freight", highlight: true }, { text: "?" }],
    subtitle: "Whether it is a single pallet or a 30-ton bulk load, get a competitive quote from our logistics team within 2 hours.",
    ctaPrimary: "Get a Quote",
    whatsappText: "Hello Otto Transport, I need a freight quote.",
  },

  homeTestimonials: [
    { name: "Farai Mupfumira", role: "Supply Chain Manager, OK Zimbabwe", text: "Otto Transport handles our weekly FMCG distribution to 40+ stores. Their on-time rate is 98% and their drivers are professional. A reliable logistics partner.", rating: 5 },
    { name: "Peter Nyathi", role: "Mine Manager, Mimosa Mining", text: "We have a long-term ore haulage contract with Otto. Their fleet availability is excellent and the GPS tracking gives us full visibility on every load.", rating: 4 },
    { name: "Chiedza Dube", role: "Import Manager, Innscor Africa", text: "Cross-border transport is complex. Otto handles our South Africa corridor seamlessly, including customs clearance. They make it look easy.", rating: 5 },
  ],

  about: {
    heroTitle: [{ text: "Built on the " }, { text: "Road", highlight: true }],
    heroSubtitle: "For over 13 years, Otto Transport Services has been the backbone of Zimbabwe's freight and logistics industry.",
    storyImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800",
    storyImageAlt: "Otto Transport fleet depot",
    storyProjectCount: "10000+", storyProjectLabel: "Loads Delivered",
    storyTitle: "From One Truck to a National Fleet",
    storyParagraphs: [
      "Otto Transport Services was founded in 2011 with a single truck and a commitment to reliability that has defined us ever since.",
      "As Zimbabwe's economy grew, so did we. We added bulk haulage for the mining sector, cross-border routes for importers, and contract logistics for manufacturers. Every expansion was driven by client demand.",
      "Today we operate a fleet of 60+ vehicles including flatbeds, tippers, tankers, and side-curtain trucks. Our 120+ team members move over 10,000 loads annually across Zimbabwe and the SADC region.",
    ],
    mission: "To be Zimbabwe's most reliable transport partner, moving freight safely, on time, and at competitive rates while investing in our people, our fleet, and our communities.",
    vision: "To build the largest and most technologically advanced road freight network in Southern Africa, setting the standard for safety, efficiency, and customer service.",
    values: [
      { iconName: "ShieldCheck", title: "Safety", desc: "Road safety is non-negotiable. Every driver, every vehicle, every load meets the highest safety standards." },
      { iconName: "Trophy", title: "Reliability", desc: "98% on-time delivery. We build our reputation one load at a time." },
      { iconName: "Lightbulb", title: "Technology", desc: "GPS tracking, route optimization, and digital PODs keep our operations transparent and efficient." },
      { iconName: "Handshake", title: "Partnership", desc: "We embed with our clients' supply chains, understanding their business as deeply as our own." },
      { iconName: "Heart", title: "People", desc: "Our drivers and staff are our greatest asset. We invest in training, welfare, and career development." },
      { iconName: "Users", title: "Community", desc: "We support road safety campaigns and community development in the towns along our routes." },
    ],
    team: [
      { name: "Otto Mhizha", role: "Managing Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
      { name: "Tatenda Maposa", role: "Head of Operations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
      { name: "Blessing Chirwa", role: "Fleet Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
      { name: "Nyasha Dube", role: "Commercial Director", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" },
    ],
    milestones: [
      { year: "2011", title: "Company Founded", desc: "Otto Transport launches with a single truck in Harare." },
      { year: "2014", title: "Mining Contracts", desc: "Secured first long-term mining ore haulage contracts." },
      { year: "2017", title: "Cross-Border Routes", desc: "Expanded to South Africa and Zambia corridors." },
      { year: "2019", title: "Fleet Milestone", desc: "Fleet grows to 40+ vehicles with GPS tracking on all units." },
      { year: "2022", title: "Warehousing Launch", desc: "Opened 5,000sqm distribution center in Msasa." },
      { year: "2024", title: "10,000+ Loads", desc: "Surpassed 10,000 successful deliveries across the region." },
    ],
    ctaTitle: "Need Freight Moved?",
    ctaSubtitle: "Get a competitive quote from our logistics team.",
    ctaCta: "Get a Quote",
  },

  services: {
    heroTitle: [{ text: "Transport " }, { text: "Solutions", highlight: true }, { text: " That Deliver" }],
    heroSubtitle: "Six specialized transport and logistics services designed to move any cargo, anywhere in the SADC region.",
    items: [
      { iconName: "Car", title: "General Freight", slug: "general-freight", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900", desc: "Full and part-load freight delivery for palletized goods, FMCG, industrial supplies, and general cargo. GPS-tracked with electronic proof of delivery.", features: ["Full truckload (FTL) and part-load (LTL)", "GPS tracking with live client portal", "Electronic proof of delivery (ePOD)", "Temperature-controlled options available", "Same-day and next-day express service", "Nationwide coverage including rural areas"] },
      { iconName: "Wrench", title: "Bulk Haulage", slug: "bulk-haulage", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900", desc: "High-volume transport of mining ore, coal, chrome, agricultural commodities, and construction materials using tipper trucks and tankers.", features: ["Tipper truck fleet for ore and aggregates", "Tanker fleet for fuel and chemicals", "High-volume mining contract capability", "Weighbridge integration", "Multi-shift operations available", "Dust suppression and load covering"] },
      { iconName: "RoadHorizon", title: "Cross-Border Transport", slug: "cross-border", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900", desc: "SADC corridor transport to South Africa, Zambia, Mozambique, and Botswana with full customs clearance and border management support.", features: ["Beitbridge and Chirundu border expertise", "Customs clearance partnership", "SADC carrier permits", "Bonded cargo capability", "Transit time guarantees", "Real-time border crossing updates"] },
      { iconName: "HardHat", title: "Abnormal Loads", slug: "abnormal-loads", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900", desc: "Specialized transport for oversized, overweight, and indivisible loads. Escort vehicles, route surveys, and permit management included.", features: ["Low-bed and step-deck trailers", "Abnormal load permit management", "Route survey and planning", "Pilot and escort vehicles", "Crane and rigging coordination", "Bridge and road condition assessment"] },
      { iconName: "ChartLineUp", title: "Contract Logistics", slug: "contract-logistics", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900", desc: "Dedicated fleet contracts with guaranteed vehicle availability, fixed pricing, and integrated reporting for mining, manufacturing, and retail.", features: ["Dedicated fleet allocation", "Fixed monthly pricing options", "KPI-based performance management", "Driver management included", "Vehicle branding available", "Monthly operational reporting"] },
      { iconName: "Buildings", title: "Warehousing & Distribution", slug: "warehousing", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900", desc: "5,000sqm secure warehousing in Msasa with pick-and-pack, inventory management, and last-mile delivery services.", features: ["5,000sqm warehouse in Msasa", "Pick-and-pack services", "Inventory management system", "Last-mile delivery fleet", "Security and CCTV monitoring", "Bonded warehouse option"] },
    ],
    ctaTitle: "Need a Transport Solution?",
    ctaSubtitle: "Every load is different. Contact us for a customized logistics quote.",
  },

  projects: {
    heroTitle: [{ text: "Loads We've " }, { text: "Delivered", highlight: true }],
    heroSubtitle: "A selection of notable freight and logistics projects handled by Otto Transport across Zimbabwe and the SADC region.",
    categories: ["All", "Bulk Haulage", "Cross-Border", "General Freight", "Abnormal Loads", "Contract Logistics"],
    items: [
      { id: 1, title: "Mimosa Platinum Ore Contract", category: "Bulk Haulage", location: "Zvishavane - Beitbridge", year: "2024", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800", desc: "Long-term contract hauling 50,000 tons of platinum ore per month from mine to processing plant. 12 dedicated tippers running 24/7.", services: ["Bulk Haulage", "Contract Logistics"] },
      { id: 2, title: "OK Zimbabwe National Distribution", category: "General Freight", location: "Nationwide", year: "2024", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800", desc: "Weekly FMCG distribution to 40+ retail stores across Zimbabwe. Temperature-controlled and ambient loads with 98% on-time delivery.", services: ["General Freight", "Contract Logistics"] },
      { id: 3, title: "SA Corridor Import Run", category: "Cross-Border", location: "Johannesburg - Harare", year: "2023", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800", desc: "Regular import runs from Johannesburg to Harare for major FMCG importers. Full customs clearance and 72-hour transit time guarantee.", services: ["Cross-Border Transport"] },
      { id: 4, title: "Power Station Transformer Move", category: "Abnormal Loads", location: "Harare - Hwange", year: "2024", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800", desc: "Transport of a 120-ton power transformer from Harare to Hwange power station. Multi-axle low-bed, 3 escort vehicles, and 7-day operation.", services: ["Abnormal Loads"] },
      { id: 5, title: "Chrome Export Haulage", category: "Bulk Haulage", location: "Shurugwi - Beira", year: "2023", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800", desc: "Cross-border chrome ore transport from Zimbabwe mines to Beira port in Mozambique for export shipment. 200+ loads per month.", services: ["Bulk Haulage", "Cross-Border Transport"] },
      { id: 6, title: "Agricultural Season Delivery", category: "General Freight", location: "Nationwide", year: "2024", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800", desc: "Fertilizer and seed distribution to agricultural depots across all provinces for the 2024/25 planting season. 500+ loads in 6 weeks.", services: ["General Freight"] },
      { id: 7, title: "Mining Equipment Relocation", category: "Abnormal Loads", location: "Bulawayo - Hwange", year: "2023", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800", desc: "Relocation of 8 pieces of heavy mining equipment including an excavator, 2 haul trucks, and crusher components.", services: ["Abnormal Loads"] },
      { id: 8, title: "Fuel Distribution Contract", category: "Bulk Haulage", location: "Beira - Nationwide", year: "2024", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800", desc: "Tanker fleet deployment for fuel distribution from Beira pipeline terminal to depots across Zimbabwe. ADR-compliant fleet.", services: ["Bulk Haulage", "Contract Logistics"] },
      { id: 9, title: "Warehouse Setup: Msasa", category: "Contract Logistics", location: "Msasa, Harare", year: "2022", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800", desc: "Established 5,000sqm distribution center for e-commerce and retail clients. Pick-and-pack operations handling 200+ orders daily.", services: ["Warehousing & Distribution"] },
    ],
  },

  reviews: {
    heroTitle: [{ text: "Client " }, { text: "Reviews", highlight: true }],
    heroSubtitle: "Real feedback from businesses across Zimbabwe and the region who trust Otto Transport with their freight.",
    ratingBreakdown: [{ stars: 5, count: 22 }, { stars: 4, count: 9 }, { stars: 3, count: 3 }, { stars: 2, count: 0 }, { stars: 1, count: 0 }],
    items: [
      { name: "Farai Mupfumira", role: "Supply Chain Manager, OK Zimbabwe", text: "Otto Transport handles our weekly FMCG distribution to 40+ stores. Their on-time rate is 98% and their drivers are professional. They have become an integral part of our supply chain.", rating: 5, date: "1 month ago", project: "Retail Distribution" },
      { name: "Peter Nyathi", role: "Mine Manager, Mimosa Mining", text: "We have a long-term ore haulage contract with Otto. Fleet availability is excellent and the GPS tracking gives us full visibility on every load. Reliable partner for mining operations.", rating: 4, date: "2 months ago", project: "Mining Haulage" },
      { name: "Chiedza Dube", role: "Import Manager, Innscor Africa", text: "Cross-border transport is complex but Otto handles our South Africa corridor seamlessly, including customs clearance. 72-hour transit from Joburg to Harare, consistently.", rating: 5, date: "3 months ago", project: "Cross-Border Import" },
      { name: "Sandra Moyo", role: "Procurement Director, Lafarge Cement", text: "Otto moves hundreds of tons of cement for us monthly. Their bulk fleet is well-maintained and their drivers understand the importance of load securing. Zero spillage incidents.", rating: 5, date: "4 months ago", project: "Cement Haulage" },
      { name: "Tinashe Banda", role: "Logistics Coordinator, Delta Beverages", text: "We switched to Otto for our Bulawayo route and immediately noticed the difference in service quality. GPS tracking, on-time delivery, and professional drivers. Should have switched sooner.", rating: 5, date: "5 months ago", project: "Beverage Distribution" },
      { name: "Maxwell Chirenje", role: "Project Manager, ZESA", text: "Otto transported a 120-ton transformer for us from Harare to Hwange. The planning, permits, and execution were flawless. A complex abnormal load handled with precision.", rating: 5, date: "6 months ago", project: "Abnormal Load" },
      { name: "Rudo Mapfumo", role: "E-commerce Owner", text: "Their warehouse services transformed our fulfilment. From 200 orders picked and packed daily to same-day dispatch in Harare. Affordable and reliable warehousing.", rating: 4, date: "7 months ago", project: "Warehousing" },
      { name: "Blessing Moyo", role: "Fuel Trader", text: "Transporting fuel requires ADR compliance and Otto delivers. Their tanker fleet is properly maintained and their drivers are trained for hazardous goods. No incidents in 3 years.", rating: 5, date: "8 months ago", project: "Fuel Transport" },
      { name: "Nyasha Gumbo", role: "Agricultural Dealer", text: "Otto delivered 500+ loads of fertilizer across the country in 6 weeks for planting season. The logistics coordination was impressive given the tight deadlines.", rating: 4, date: "9 months ago", project: "Agri Distribution" },
      { name: "David Mhizha", role: "Chrome Exporter", text: "Monthly chrome ore haulage from mine to Beira port. Otto handles the cross-border complexity and their fleet reliability keeps our export schedule on track.", rating: 5, date: "10 months ago", project: "Mineral Export" },
      { name: "Tatenda Muza", role: "Construction Manager", text: "We use Otto for delivering construction materials to multiple sites. Their drivers know the routes, arrive on time, and the GPS tracking lets us plan site deliveries precisely.", rating: 4, date: "11 months ago", project: "Construction Supply" },
      { name: "Grace Ndlovu", role: "Pharmaceutical Distributor", text: "Temperature-controlled pharmaceutical delivery across Zimbabwe. Otto invested in monitoring equipment to meet our cold chain requirements. Partnership that prioritizes product integrity.", rating: 5, date: "1 year ago", project: "Pharma Distribution" },
    ],
    ctaTitle: "Ready to Move Your Freight?",
    ctaSubtitle: "Join the businesses that trust Otto Transport for reliable, tracked, and insured freight delivery.",
    ctaCta: "Get a Quote",
    ctaWhatsappText: "Hello, I need a freight transport quote from Otto Transport.",
  },

  contact: {
    heroTitle: [{ text: "Let's Move " }, { text: "Your Load", highlight: true }],
    heroSubtitle: "Need a freight quote? Have questions about our routes or fleet? Our logistics team responds within 2 hours.",
    formTitle: "Send Us a Message",
    formSubtitle: "Fill in the form and choose how you'd like to send it.",
  },

  careers: {
    heroTitle: [{ text: "Drive Your " }, { text: "Career", highlight: true }, { text: " Forward" }],
    heroSubtitle: "Join Zimbabwe's fastest-growing transport company. We need drivers, mechanics, logistics coordinators, and warehouse staff.",
    heroImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920",
    cultureTitle: "Why Drive With Us?",
    cultureItems: [
      { iconName: "Users", title: "Team Spirit", desc: "A fleet that works together, supports each other, and celebrates wins together." },
      { iconName: "Rocket", title: "Growth", desc: "From driver to fleet supervisor. We promote from within and invest in your career." },
      { iconName: "ShieldCheck", title: "Safety First", desc: "Modern vehicles, regular maintenance, and zero tolerance for unsafe driving." },
    ],
    cultureImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400",
    cultureImageAlt: "Otto Transport drivers and fleet",
    cultureTagline: "More Than a Job. A Journey.",
    cultureTaglineDesc: "Every kilometre driven, every load delivered, every deadline met builds something bigger. Join us on the road.",
    benefits: [
      { iconName: "CurrencyDollar", title: "Competitive Pay", desc: "Market-leading driver salaries plus distance bonuses and trip allowances." },
      { iconName: "FirstAid", title: "Medical Cover", desc: "Medical aid for you and your family from day one of employment." },
      { iconName: "GraduationCap", title: "Licence Upgrades", desc: "Sponsored Class 1 and CE driver licence upgrades for qualifying employees." },
      { iconName: "Car", title: "Modern Fleet", desc: "Drive well-maintained, modern vehicles. No breakdowns, no stress." },
      { iconName: "Heart", title: "Road Wellness", desc: "Driver wellness program including regular health checks and rest stop facilities." },
      { iconName: "ShieldCheck", title: "PPE & Gear", desc: "Full PPE, wet weather gear, and safety equipment provided to all drivers." },
    ],
    positions: [
      { id: 1, title: "Long-Distance Driver (Class 1)", department: "Operations", type: "Full-Time", location: "Various Routes", description: "Experienced Class 1 driver for long-haul routes across Zimbabwe and SADC.", requirements: ["Class 1 driver's licence", "5+ years heavy vehicle experience", "Clean driving record", "Cross-border experience preferred", "Willingness to be away from home"] },
      { id: 2, title: "Diesel Mechanic", department: "Workshop", type: "Full-Time", location: "Harare", description: "Skilled diesel mechanic to maintain our fleet of trucks and trailers.", requirements: ["Diesel mechanic qualification", "5+ years heavy vehicle experience", "Diagnostic equipment proficiency", "Brake and hydraulic systems knowledge", "Valid driver's licence"] },
      { id: 3, title: "Logistics Coordinator", department: "Dispatch", type: "Full-Time", location: "Harare", description: "Coordinate daily vehicle dispatch, driver allocation, and delivery scheduling.", requirements: ["Diploma in logistics or supply chain", "3+ years logistics coordination", "Transport management system experience", "Strong organizational skills", "Ability to work under pressure"] },
      { id: 4, title: "Warehouse Supervisor", department: "Warehousing", type: "Full-Time", location: "Msasa, Harare", description: "Supervise warehouse operations including receiving, picking, packing, and dispatch.", requirements: ["Diploma in logistics or supply chain", "3+ years warehouse supervision", "Inventory management system experience", "Forklift licence preferred", "Team management skills"] },
      { id: 5, title: "Trainee Driver", department: "Operations", type: "Learnership", location: "Harare", description: "12-month driver training program for aspiring professional truck drivers.", requirements: ["Class 4 driver's licence minimum", "Clean driving record", "Physical fitness for driving roles", "Basic English literacy", "Willingness to learn and grow"] },
    ],
    generalApplicationTitle: "Don't See the Right Role?",
    generalApplicationSubtitle: "We are always looking for reliable drivers and logistics professionals.",
    generalApplicationCta: "Send Your CV",
  },

  footer: {
    description: "Moving Zimbabwe forward with reliable trucking, haulage, and logistics solutions since 2011.",
    copyright: "Otto Transport Services (Pvt) Ltd",
  },
};

export default siteData;
