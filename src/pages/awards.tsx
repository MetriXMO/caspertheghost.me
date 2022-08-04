import { NextSeo } from "next-seo";


import { Layout } from "components/Layout";
import { GetStaticProps } from "next";



const pageTitle = "Awards";
const pageDescription = "Awards in GIMO";

export default function awards() {
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
        <h1 className="section-title">Sponsors and Awards</h1>
        

        <div className="max-w-3xl mt-5 text-neutral-800 dark:text-gray-200">

          <p></p>
          <p>
            <b>Wolfram:</b> They are sponsoring Wolfram Notebook Edition. This will be awarded to top 10 partcipants.
           
          </p>
                   
             <p>
            <b>Taskade:</b> They are sponsoring life time upgrades to Taskade Unlimited worth around $ 4000 each. This will be awarded to top 50 partcipants.
Other than that it will be raffled out to the 10 more partcipants who have offcialy registered for the contest and confirm that they are a contestant.
           
          </p>
          
             <p>
            <b>Interview Cake:</b> They are sponsoring full access licenses so attendees can get access to their full coding interview prep course each worth near to $ 1400. Everyone registering, confirming that they have partcipated in the contest, claiming us in our mail just after the conclusion of the contest will be awarded with this.

           
          </p>
          
             <p>
            <b>BBMC- Math:</b> They are sponsoring two course on olympiad math each worth near $400. This will be awarded to top 2 grade 8 or lower winners.
           
          </p>
          
             <p>
            <b>Desmos:</b> They are sponsoring the swag pack worth $ 45. This will be awarded only to the winner of the contest.
           
          </p>
          
               <p>
            <b>AoPS:</b> AoPS is sponsoring 4 AoPS gift cards each worth $ 25. Three of them will be awarded to the top 3 winners and the other one will be raffled.
           
          </p>
          
          <p className="mt-5">
          The <b>team</b> which brings out GIMO is the GIMO team which consists of multiple IMO contestants who have
            won gold, silver, bronze and honourable mentions in IMO for their country, some who are going to partcipate 
            in IMO this year representing their country, MOP ers, USA(J)MO qualifiers and math enthusiasts.
            Here yTo know more, check the about page.
          </p>
          
           <br></br>
            <h1 className="section-title">GIMO Schedule</h1>
          
          <p className="mt-5">
           The contest will be tentatively held on August last week or september first week.
          </p>
        
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
