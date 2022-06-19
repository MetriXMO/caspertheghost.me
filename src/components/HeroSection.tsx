import Link from "next/link";

export const HeroSection = () => {
  // this is roughly the date I started programing according to GitHub 😅!
  const started = new Date("2019-08-08");

  return (
    <section className="flex flex-col justify-center mx-auto min-h-[40em]" id="top">
      <div>
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
          GIMO<span className="hidden xs:inline">2022</span>,
        </h1>
        <h2 className="mt-2 text-4xl font-medium sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
          Online Math Conest, Year 2
        </h2>
      </div>

      <p className="max-w-3xl mt-8 text-neutral-800 dark:text-gray-300 md:text-xl">
        GIMO is an International Mathematical Olympiad-style mathematical contest held online for individuals 
        where you will be given nearly 10 days work out the roblems and submit them within that time interval. To know more,check the about page.
        <Link href="/about">
          <a className="font-medium underline">Read more.</a>
        </Link>
      </p>
    </section>
  );
};
