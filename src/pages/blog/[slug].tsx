import Head from "next/head";
import { Layout } from "components/Layout";
import { getAllItems, getItemBySlug } from "lib/mdx";
import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "types/Post";
import { Article } from "components/blog/Article";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";

export default function BlogPost({ post }: { post: Post }) {
  const pageTitle = `${post.title} - Casper Iversen`;
  const pageDescription = post.intro ?? undefined;

  return (
    <Layout>
      <NextSeo
        openGraph={{
          article: {
            publishedTime: post.createdAt,
          },
          title: pageTitle,
          description: pageDescription,
        }}
        canonical={`https://casper.dev/blog/${post.slug}`}
        title={pageTitle}
        description={pageDescription}
        additionalMetaTags={[
          {
            name: "keywords",
            content: [...DEFAULT_KEYWORDS, "blog", "blog casper iversen", post.keywords ?? ""].join(
              ", ",
            ),
          },
        ]}
      />

      <Head>
        <link rel="preload" href="/fonts/CascadiaMono.woff2" as="font" type="font/woff2" />
      </Head>

      <Article article={post} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllItems({
    type: "posts",
    includeDrafts: true,
    includeArchived: true,
  });

  return {
    fallback: false,
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getItemBySlug(params?.slug as string, "posts");

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};
