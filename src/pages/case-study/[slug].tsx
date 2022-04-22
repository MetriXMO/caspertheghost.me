import Head from "next/head";
import { Layout } from "components/Layout";
import { getAllItems, getItemBySlug } from "lib/mdx";
import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "types/Post";
import { Article } from "components/blog/Article";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";

export default function BlogPost({ caseStudy }: { caseStudy: Post }) {
  const pageTitle = `${caseStudy.title} - Casper Iversen`;
  const pageDescription = caseStudy.intro ?? undefined;

  return (
    <Layout>
      <NextSeo
        openGraph={{
          article: {
            publishedTime: caseStudy.createdAt,
          },
          title: pageTitle,
          description: pageDescription,
        }}
        canonical={`https://casper.dev/case-study/${caseStudy.slug}`}
        title={pageTitle}
        description={pageDescription}
        additionalMetaTags={[
          {
            name: "keywords",
            content: [
              ...DEFAULT_KEYWORDS,
              "case studies",
              "case studies casper iversen",
              ...(caseStudy.keywords ?? []),
            ].join(", "),
          },
        ]}
      />

      <Head>
        <link rel="preload" href="/fonts/CascadiaMono.woff2" as="font" type="font/woff2" />
      </Head>

      <Article article={caseStudy} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const caseStudies = await getAllItems({
    type: "case-studies",
    includeArchived: true,
    includeDrafts: true,
  });

  return {
    fallback: false,
    paths: caseStudies.map((snippet) => ({
      params: {
        slug: snippet.slug,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const caseStudy = await getItemBySlug(params?.slug as string, "case-studies");

  if (!caseStudy) {
    return {
      notFound: true,
    };
  }

  return {
    props: { caseStudy },
  };
};
