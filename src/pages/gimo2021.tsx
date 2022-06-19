import { Project } from "types/Project";
import { Layout } from "components/Layout";
import { GetStaticProps } from "next";
import { FeaturedProjectsSection } from "components/FeaturedProjects";
import { Project } from "types/Project";

interface Props {
  projects: Project[];
}

export default function gimo2021({projects }: Props) {
  return (
    <Layout>
      
      <FeaturedProjectsSection projects={projects} />
    
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = (await import("data/featured-projects")).projects;

  return {
    props: {
      projects,
    },
  };
};

