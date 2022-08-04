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

          <p className="mt-5">With the help of our sponsors we are awarding items worth near to $ 4,00,000. Note that, you must personal message us or gmail us at gaussiancurv180@gmail.com to claim your prizes.</p>
          <br></br>        <br></br>
             <h1 className="section-title">Wolfram</h1>
          
          <p className="mt-5">
            They are sponsoring Wolfram Alpha Notebook Edition. This will be awarded to top 10 partcipants.
           
          </p>  <br></br>        <br></br>
                    <h1 className="section-title">Taskade</h1>  
             <p className="mt-5">
            They are sponsoring life time upgrades to Taskade Unlimited worth around $ 4000 each. This will be awarded to top 50 partcipants.
Other than that it will be raffled out to the 10 more partcipants who have offcialy registered for the contest and confirm that they are a contestant.
           
          </p>  <br></br>        <br></br>
             <h1 className="section-title">Interview Cake</h1>
             <p className="mt-5">
             They are sponsoring full access licenses so attendees can get access to their full coding interview prep course each worth near to $ 1400. Everyone registering, confirming that they have partcipated in the contest, claiming us in our mail just after the conclusion of the contest will be awarded with this.

           
          </p>  <br></br>        <br></br>
                 <h1 className="section-title">BBMC Math</h1>
             <p className="mt-5">
             They are sponsoring two course on olympiad math each worth near $400. One will be awarded to winner in grade 8 or lower section and the other one will be raffled.
           
          </p>  <br></br>        <br></br>
                 <h1 className="section-title">Desmos</h1>
             <p className="mt-5">
             They are sponsoring the swag pack worth $ 45. This will be awarded only to the winner of the contest.
           
          </p>  <br></br>        <br></br>
                 <h1 className="section-title">Art of Problem Solving(AoPS)</h1>
               <p className="mt-5">
            <b>AoPS:</b> AoPS is sponsoring 4 AoPS gift cards each worth $ 25. Three of them will be awarded to the top 3 winners and the other one will be raffled.
           
          </p>
          
          
           <br></br>
         
          
      
        
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
