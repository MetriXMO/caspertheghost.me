// @ts-check

const description =
  "I'm an extremely motivated frontend focused web developer specializing in React.js, TypeScript, JavaScript, CSS, HTML and other frontend focused libraries and frameworks.";
const title = "Casper Iversen - Web Developer";

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
    url: "https://casper.dev",
    site_name: "casper.dev",
    description,
    title,
  },
  twitter: {
    handle: "@casper124578",
    site: "@site",
    cardType: "summary",
  },
  canonical: "https://casper.dev",
  defaultTitle: title,
  description,
  additionalMetaTags: [
    {
      name: "keywords",
      content: DEFAULT_KEYWORDS.join(", "),
    },
  ],
};
