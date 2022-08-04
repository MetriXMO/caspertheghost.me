export const MyBackpackSection = ({ myBackpack }: { myBackpack: [string, string[]][] }) => {
  return (
    <section id="skills">
      <h1 className="section-title">GIMO 2022 Team</h1>

      <p className="my-4 text-neutral-800 dark:text-gray-300">
       The team consists of <b>multiple IMO contestants</b> who have won <b className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">
  gold, silver and bronze</b> in IMO, <b className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">MOP qualifiers</b>, <b className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#14deb9]">USA(J)MO qualifiers</b> and <b className="max-w-3xl mt-8 text-neutral-800 dark:text-[#14deb9] md:text-[#262627]">math enthusisats</b>.
      </p>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
        {myBackpack.map(([header, items]) => {
          return (
            <div key={header} className="flex flex-col my-3 sm:my-0">
              <header className="mb-1">
                <h1 className="text-2xl font-semibold">{header}</h1>
              </header>

              <ul>
                {items.map((item) => (
                  <li className="my-1" key={item}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
