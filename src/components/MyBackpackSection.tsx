export const MyBackpackSection = ({ myBackpack }: { myBackpack: [string, string[]][] }) => {
  return (
    <section id="skills">
      <h1 className="section-title">GIMO 2022 Team</h1>

      <p className="my-4 text-neutral-800 dark:text-gray-300">
        You can find our team here. Our team consists of multiple IMO contestants who have won gold, silver and bronze in IMO, some who are going to partcipate in IMO this year representing their country, MOP ers, USA(J)MO qualifiers and math enthusisats.
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
