import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import nmcCatalog from "../modules/ProductsListPage/data";

const SITE_URL = "https://www.nmchomecinemas.com";
const DEFAULT_IMAGE = "/logo.svg";
const DEFAULT_TITLE = "NMC Home Cinemas | Premium Home Theater & Audio Solutions in Andhra Pradesh";
const DEFAULT_DESCRIPTION =
  "NMC Home Cinemas designs premium home theater systems, projectors, screens, recliners, audio systems, and AV receivers for homes and commercial spaces across Nagari, Tirupati, Chittoor, and South India.";
const DEFAULT_KEYWORDS =
  "home theater, home cinema, projector store, audio systems, av receivers, premium home cinema, luxury home theater, Nagari, Tirupati, Chittoor, Andhra Pradesh";

const companyAddress = {
  streetAddress: "Prakasam Road",
  addressLocality: "Nagari",
  addressRegion: "Chittoor District",
  addressCountry: "IN",
  postalCode: "517590",
  addressRegionName: "Andhra Pradesh",
};

const faqItems = [
  {
    question: "Do you install home theatres in Nagari and Tirupati?",
    answer:
      "Yes, NMC Home Cinemas provides professional home theater installation and design services across Nagari, Tirupati, Chittoor, and nearby areas in Andhra Pradesh.",
  },
  {
    question: "Can you help design a luxury home cinema system?",
    answer:
      "Absolutely. We create tailored luxury home cinema solutions for homeowners, architects, interior designers, and commercial clients with premium acoustics and aesthetics.",
  },
  {
    question: "Do you supply projectors, screens, and audio systems?",
    answer:
      "Yes. We offer premium projectors, projection screens, recliners, speakers, subwoofers, and AV receivers from trusted brands for elevated entertainment spaces.",
  },
];

const setMetaTag = (attrName, attrValue, content, tag = "meta") => {
  let element = document.head.querySelector(`${tag}[${attrName}="${attrValue}"]`);

  if (!element) {
    element = document.createElement(tag);
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
  return element;
};

const setCanonical = (url) => {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
};

const injectJsonLd = (id, data) => {
  let script = document.getElementById(id);

  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

const Seo = () => {
  const location = useLocation();
  const { pathname, search } = location;

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    const pathParts = normalizedPath.split("/").filter(Boolean);
    const searchParams = new URLSearchParams(search);
    const categoryFilter = searchParams.get("filter");

    const { categories, products } = nmcCatalog;
    const product =
      pathParts[0] === "products" && pathParts.length === 3
        ? products.find(
            (item) => item.category === pathParts[1] && item.slug === pathParts[2],
          )
        : null;

    const category = categories.find((item) => item.id === categoryFilter);

    const pageTitle =
      product?.name
        ? `${product.name} | ${product.brand} | NMC Home Cinemas`
        : normalizedPath === "/"
          ? DEFAULT_TITLE
          : normalizedPath === "/products"
            ? `Premium Home Cinema Systems, Projectors & Audio in Andhra Pradesh | NMC Home Cinemas`
            : normalizedPath === "/explore"
              ? `Explore Premium Home Theater Solutions | NMC Home Cinemas`
              : normalizedPath === "/find-solution"
                ? `Find the Right Home Cinema Solution | NMC Home Cinemas`
                : normalizedPath === "/learn-more"
                  ? `Learn More About Luxury Home Theater Design | NMC Home Cinemas`
                  : category
                    ? `${category.label} for Premium Home Entertainment | NMC Home Cinemas`
                    : DEFAULT_TITLE;

    const pageDescription =
      product?.description
        ? `${product.description} Discover premium ${product.name} solutions from NMC Home Cinemas in Nagari, Tirupati, Chittoor, and Andhra Pradesh.`
        : normalizedPath === "/products"
          ? "Browse premium home cinema systems, projectors, projection screens, recliners, speakers, subwoofers, and AV receivers curated for luxury spaces in South India."
          : normalizedPath === "/explore"
            ? "Explore award-winning home theater design ideas, premium audio systems, and custom installation solutions from NMC Home Cinemas."
            : normalizedPath === "/find-solution"
              ? "Find the best home cinema, projector, screen, audio, and installation solution for your property with NMC Home Cinemas."
              : normalizedPath === "/learn-more"
                ? "Learn how NMC Home Cinemas creates exceptional luxury home theater experiences with premium design and engineering."
                : DEFAULT_DESCRIPTION;

    const pageKeywords =
      product?.name
        ? `${product.name}, ${product.brand}, home theater, home cinema, ${companyAddress.addressLocality}, ${companyAddress.addressRegionName}`
        : DEFAULT_KEYWORDS;

    const pageUrl = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;

    document.title = pageTitle;
    document.documentElement.lang = "en";

    setMetaTag("name", "description", pageDescription);
    setMetaTag("name", "keywords", pageKeywords);
    setMetaTag("name", "author", "NMC Home Cinemas");
    setMetaTag("name", "robots", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
    setMetaTag("name", "theme-color", "#0f0f0f");
    setMetaTag("name", "color-scheme", "dark light");
    setMetaTag("property", "og:title", pageTitle);
    setMetaTag("property", "og:description", pageDescription);
    setMetaTag("property", "og:image", DEFAULT_IMAGE);
    setMetaTag("property", "og:url", pageUrl);
    setMetaTag("property", "og:type", product ? "product" : "website");
    setMetaTag("property", "og:site_name", "NMC Home Cinemas");
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", pageTitle);
    setMetaTag("name", "twitter:description", pageDescription);
    setMetaTag("name", "twitter:image", DEFAULT_IMAGE);

    setCanonical(pageUrl);

    const breadcrumbItems =
      product
        ? [
            { name: "Home", item: `${SITE_URL}/` },
            { name: "Products", item: `${SITE_URL}/products` },
            { name: category?.label || product.category, item: `${SITE_URL}/products?filter=${product.category}` },
            { name: product.name, item: pageUrl },
          ]
        : normalizedPath === "/products"
          ? [
              { name: "Home", item: `${SITE_URL}/` },
              { name: "Products", item: pageUrl },
            ]
          : normalizedPath === "/explore"
            ? [
                { name: "Home", item: `${SITE_URL}/` },
                { name: "Explore", item: pageUrl },
              ]
            : normalizedPath === "/find-solution"
              ? [
                  { name: "Home", item: `${SITE_URL}/` },
                  { name: "Find a Solution", item: pageUrl },
                ]
              : normalizedPath === "/learn-more"
                ? [
                    { name: "Home", item: `${SITE_URL}/` },
                    { name: "Learn More", item: pageUrl },
                  ]
                : [
                    { name: "Home", item: `${SITE_URL}/` },
                  ];

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "NMC Home Cinemas",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      description:
        "NMC Home Cinemas creates premium home cinema systems, projector installations, audio systems, and luxury entertainment solutions across Andhra Pradesh and South India.",
      address: {
        "@type": "PostalAddress",
        ...companyAddress,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9032596016",
        contactType: "sales",
        email: "nmchomecinemas@gmail.com",
        areaServed: ["IN"],
        availableLanguage: ["English"],
      },
      sameAs: ["https://www.instagram.com/nmchomecinemas"],
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: "NMC Home Cinemas",
      url: SITE_URL,
      image: `${SITE_URL}/logo.svg`,
      telephone: "+91-9032596016",
      email: "nmchomecinemas@gmail.com",
      address: {
        "@type": "PostalAddress",
        ...companyAddress,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "13.6488",
        longitude: "79.5459",
      },
      priceRange: "$$$",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Nagari" },
        { "@type": "AdministrativeArea", name: "Tirupati" },
        { "@type": "AdministrativeArea", name: "Chittoor" },
        { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
        { "@type": "AdministrativeArea", name: "South India" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "20:00",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9032596016",
        contactType: "sales",
        email: "nmchomecinemas@gmail.com",
        areaServed: ["IN"],
      },
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "NMC Home Cinemas",
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/products?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const productSchema = product
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          brand: {
            "@type": "Brand",
            name: product.brand,
          },
          category: product.category,
          url: pageUrl,
          image: Array.isArray(product.image) ? product.image : [product.image],
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            url: pageUrl,
            priceCurrency: "INR",
            price: "0",
          },
        }
      : null;

    const schemas = [organizationSchema, localBusinessSchema, websiteSchema, breadcrumbSchema, faqSchema];
    if (productSchema) schemas.push(productSchema);

    injectJsonLd("nmc-seo-structured-data", schemas);
  }, [pathname, search]);

  return null;
};

export default Seo;
