import { NextSeo } from "next-seo";


import { Layout } from "components/Layout";
import { GetStaticProps } from "next";



const pageTitle = "About - GIMO";
const pageDescription = "Get to know more about GIMO";

export default function About() {
  // this is roughly the date I started programing according to GitHub 😅!


  return (
    <Layout>
      <NextSeo
        openGraph={{ title: pageTitle, description: pageDescription }}
        canonical="https://hellogimo.vercel.app/about"
        title={pageTitle}
        description={pageDescription}
      />

      <section id="about">
        <h1 className="section-title">About GIMO 2022</h1>

        <div className="max-w-3xl mt-5 text-neutral-800 dark:text-gray-200">
          <p>
            GIMO is an <b  className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">International Mathematical Olympiad Style</b> mathematical contest held online
            for individuals. It is similar to the IMO format except that here the contest will be <b  className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">individual based</b> rather than team based and it will be untimed.
            You will be given nearly twelve days to work out with six problems and you have to submit them within that time interval. 
            <br></br><br></br>
The full form of GIMO chnages every year, last year it was called the Gaussian International Mathematical Olympiad.            
 
       In case you are confused with the format: </p>
          <br></br>
<p> The paper will contain 6 subjective problems in total and it will be relased in two day with three problem each on the both days. Each problem is worth 7 points so you can score at most 42 points. Please use wisely the time we gave to workout with the problems. This goes mostly ignored, but no diagram in a geometry problem will result in loss of 1 point.  Contest Format is individual and <b>detailed schedule</b> is provided below or you can go through the PDF. </p>
          
          
          
           <br></br>
            <h1 className="section-title">GIMO Schedule</h1>
          
          <p className="mt-5">
           The contest will be held on <b  className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">21 th August, 2022 and will end on 1st September, 2022</b>. There is no registration deadline. 
          </p>
        
          
            <br></br>
       <h1 className="section-title">GIMO Submission Process</h1>
          
          <p className="mt-5"> 
            <b  className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">Submission Process I.</b> You can submit your solutions on AoPS PM to <b className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">Aritra/Aritra 12</b> on AoPS  if you have an account at AoPS. This is the most preferred way of submission and it is also beneficial
to participants because on AoPS PM you are allowed to send solutions one by one in that single PM, however you are not allowed so for the other two processes. But obviously you can send day 1
and day 2 separately. <br></br>
          </p> <br></br>
            <p><b className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">Submission Process II.</b> For submitting  solutions, please upload solutions in the following link:
          </p>   <br></br>
         <p>   <b className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">Submission Process III.</b> If you are unable to do any of the things above then just simply mail your
solutions pdf to us on our mail <b className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">gaussiancurv180@gmail.com</b></p>

          
        </div>
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
