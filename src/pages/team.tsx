import { Layout } from "components/Layout";
import { MyBackpackSection } from "components/MyBackpackSection";
import { GetStaticProps } from "next";


interface Props {

  myBackpack: [string, string[]][];
}

export default function team({ myBackpack}: Props) {
  return (
    <Layout>
     
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
