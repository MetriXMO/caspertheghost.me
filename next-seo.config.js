// @ts-check

const description =
  "GIMO is an International Mathematical Olympiad style mathematical contest held online every year for individuals. It is organized by the GIMO team which consists of multiple IMO contestants who have won gold, silver, bronze and honorable mentions in IMO, MOP qualifiers, USA(J)MO qualifiers and math enthusiasts. ";
const title = "GIMO - Olympiad Contest";

export const DEFAULT_KEYWORDS = [
  "dev-caspertheghost",
  "casper iversen",
  "ghostybot",
  "snaily cad",
  "belgium",
  "snailycad",
  "web developer",
  "developer",
];

/** @type {import("next-seo").DefaultSeoProps} */
export const SEO = {
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hellogimo.vercel.app/",
    site_name: "https://hellogimo.vercel.app/",
    description,
    title,
  },
  twitter: {
    handle: "@casper124578",
    site: "@site",
    cardType: "summary",
  },
  canonical: "https://hellogimo.vercel.app/",
  defaultTitle: title,
  description,
  additionalMetaTags: [
    {
      name: "keywords",
      content: DEFAULT_KEYWORDS.join(", "),
    },
  ],
};
