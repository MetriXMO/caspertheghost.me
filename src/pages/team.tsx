import { Layout } from "components/Layout";
import { MyBackpackSection } from "components/MyBackpackSection";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

const pageTitle = "GIMO Team";
const pageDescription = "GIMO Team"

interface Props {

  myBackpack: [string, string[]][];
}

export default function team({ myBackpack}: Props) {
  return (
    <Layout>
      <NextSeo
        openGraph={{ title: pageTitle, description: pageDescription }}
        canonical="https://hellogimo.vercel.app/team"
        title={pageTitle}
        description={pageDescription}
      />
      <MyBackpackSection myBackpack={myBackpack} />
     
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const myBackpack = (await import("data/my-backpack")).myBackpack;


  return {
    props: {
      myBackpack,
   
    },
  };
};
