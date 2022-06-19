import { NextSeo } from "next-seo";
import Link from "next/link";

import { Layout } from "components/Layout";
import { GetStaticProps } from "next";
import { TimelineItem } from "types/Timeline";
import { Timeline } from "components/timeline/Timeline";

const pageTitle = "About - GIMO";
const pageDescription = "Get to know more about gimo";



  return (
    <Layout>
      <NextSeo
        openGraph={{ title: pageTitle, description: pageDescription }}
        canonical="https://caspertheghost.me/about"
        title={pageTitle}
        description={pageDescription}
      />

      <section id="about">
            <h1 className="section-title">Information about the contest and Schedule of the contest</h1>

        <div className="max-w-3xl mt-5 text-neutral-800 dark:text-gray-200">
          <p>
            GIMO is an International Mathematical Olympiad Style mathematical contest held online
            for individuals. It is similar to the IMO format except that here the contest will be individual based rather than team based and it will be untimed.
            You will be given nearly twelve days to work out with six problems and you have to submit them within that time interval. 
           
          </p>
          <p className="mt-5">
            The team which brings out GIMO is the GIMO team which consists of multiple IMO contestants who have
            won gold, silver, bronze and honourable mentions in IMO for their country, some who are going to partcipate 
            in IMO this year representing their country, MOP ers, USA(J)MO qualifiers and math enthusiasts.
          </p>
          <p className="mt-5">
            When {"I'm"} not programming or in school, I enjoy going mountain biking. I also love
            skiing!
          </p>
          <h className="section-title">
           GIMO Schedule
          </h>
          <p className="mt-5">The contest will be tentatively held on August last week or september first week.</p>
        </div>
      </section>

      <section className="mt-10" id="timeline">
        <h1 className="section-title">Timeline</h1>

        <Timeline timelineData={timelineData} />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const timelineData = await (await import("../data/timeline")).timeline;

  return {
    props: {
      timelineData,
    },
  };
};
