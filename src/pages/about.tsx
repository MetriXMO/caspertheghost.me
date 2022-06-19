import { NextSeo } from "next-seo";


import { Layout } from "components/Layout";

const pageTitle = "About - GIMO";
const pageDescription = "Get to know more about GIMO";


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
        <h1 className="section-title">About Me</h1>

        <div className="max-w-3xl mt-5 text-neutral-800 dark:text-gray-200">
          <p>
            GIMO is an International Mathematical Olympiad Style mathematical contest held online
            for individuals. It is similar to the IMO format except that here the contest will be individual based rather than team based and it will be untimed.
            You will be given nearly twelve days to work out with six problems and you have to submit them within that time interval. 
           
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



};
