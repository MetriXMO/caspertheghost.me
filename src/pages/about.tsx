import { NextSeo } from "next-seo";
import Link from "next/link";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Layout } from "components/Layout";
import { GetStaticProps } from "next";
import { TimelineItem } from "types/Timeline";
import { Timeline } from "components/timeline/Timeline";

const pageTitle = "About - Casper Iversen";
const pageDescription = "Get to know more about me and some of my accomplishments.";

export default function About({ timelineData }: { timelineData: TimelineItem[] }) {
  // this is roughly the date I started programing according to GitHub 😅!
  const started = new Date("2019-08-08");

  return (
    <Layout>
      <NextSeo
        openGraph={{ title: pageTitle, description: pageDescription }}
        canonical="https://caspertheghost.me/about"
        title={pageTitle}
        description={pageDescription}
      />

      <section id="about">
            <h1 className="section-title">About Me</h1>

        <div className="max-w-3xl mt-5 text-neutral-800 dark:text-gray-200">
          <p>
            GIMO is an International Mathematical Olympiad Style mathematical contest held online
            for individuals. It is similar to the IMO format except that here the contest will be individual based rather than team based and it will be untimed.
            You will be given nearly twelve days to work out with six problems and you have to submit them within that time interval. 
           
          </p>
          <p className="mt-5">
            I have been developing web applications, Discord bots and npm packages for{" "}
            {formatDistanceToNow(started)} and love it! I learn something new almost every day!
            Currently, {"I'm"} focusing on frontend web development, specifically working with
            React.js, TypeScript, CSS, HTML and much more!
          </p>
          <p className="mt-5">
            When {"I'm"} not programming or in school, I enjoy going mountain biking. I also love
            skiing!
          </p>
          <p className="mt-5 text-base italic">
            PS: If there is something that {"you'd"} like to know more about me, {"don't"} hesitate
            to{" "}
            <Link href="/#contact">
              <a className="underline">contact me</a>
            </Link>
            !
          </p>
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
