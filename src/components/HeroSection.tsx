export const HeroSection = () => {
  // this is roughly the date I started programing according to GitHub 😅!

  return (
    <section className="flex flex-col justify-center mx-auto min-h-[40em]" id="top">
      <div>
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-[#228cff]">
          GIMO <span className="hidden xs:inline">2022</span>
        </h1>
        <h2 className="mt-2 text-4xl font-medium sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
          Online Math Conest Year 2
        </h2>
      </div>

      <p className="max-w-3xl mt-8 text-neutral-800 dark:text-gray-300 md:text-xl">
        GIMO is an International Mathematical Olympiad Style mathematical contest held online for individuals by GIMO team which consists of multiple 
        IMO contestants who have won gold, silver and bronze in IMO for their country, some who are going to partcipate in IMO this year representing their country,
        MOP ers, USA(J)MO qualifiers and math enthusiasts. Here you will be given nearly ten  days to work out with six problems and you have submit them within that time interval. To know more, check the about page. 
      
      </p>
    </section>
  );
};
