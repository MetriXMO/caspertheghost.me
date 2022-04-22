import { HeroSection } from "components/HeroSection";
import { Layout } from "components/Layout";
import { MyBackpackSection } from "components/MyBackpackSection";
import { GetStaticProps } from "next";
import { FeaturedProjectsSection } from "components/FeaturedProjects";
import { Project } from "types/Project";
import { ContactSection } from "components/ContactSection";
import { NextSeo } from "next-seo";

interface Props {
  projects: Project[];
  myBackpack: [string, string[]][];
}

export default function Home({ myBackpack, projects }: Props) {
  return (
    <Layout>
      <NextSeo
        openGraph={{ title: "Casper Iversen - Web Developer" }}
        canonical="https://casper.dev"
        title="Casper Iversen - Web Developer"
      />

      <HeroSection />
      <MyBackpackSection myBackpack={myBackpack} />
      <FeaturedProjectsSection projects={projects} />
      <ContactSection />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const myBackpack = (await import("data/my-backpack")).myBackpack;
  const projects = (await import("data/featured-projects")).projects;

  return {
    props: {
      myBackpack,
      projects,
    },
  };
};
