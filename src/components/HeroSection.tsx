

export const HeroSection = () => {
  // this is roughly the date I started programing according to GitHub 😅




  return (
    <section className="flex flex-col justify-center mx-auto min-h-[40em]" id="top">
     <div>
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-[#14deb9]">
          GIMO <span className="hidden xs:inline">2022</span>
        </h1>
        <h2 className="mt-2 text-4xl font-medium sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
          Online Math Contest Year 2
        </h2>
      </div>

      <p className="max-w-3xl mt-8 text-neutral-800 dark:text-gray-300 md:text-xl">
        GIMO is an International Mathematical Olympiad style mathematical contest held online every year for individuals. It is organised by the <b>GIMO team</b> which <b>consists</b> of <b>multiple IMO contestants</b> who have won <b className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">
  gold, silver and bronze</b> in IMO, <b>MOP qualifiers</b>, <b>USA(J)MO qualifiers</b> and <b>math enthusisats</b>. You will be provided nearly twelve days to work out with six problems and you have to submit your response within that time interval. To know more, check the about page. 
        <br></br><br></br>
        Here is the <b className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">discord server</b> where daily GIMO updates will be provided: <a href="https://discord.gg/RdNHVKhgGP">GC Discord Server</a>
      
      </p>  
    </section>
  );
};
