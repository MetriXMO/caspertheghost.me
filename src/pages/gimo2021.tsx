import { Project } from "types/Project";


interface Props {
  projects: Project[];
  myBackpack: [string, string[]][];
}

export default function gimo2021() {
  return (
    <Layout>
      
      <FeaturedProjectsSection projects={projects} />
    
    </Layout>
  );
}



