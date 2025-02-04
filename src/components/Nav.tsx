import * as React from "react";
import { useRouter } from "next/router";
import { Github,  List,  X } from "react-bootstrap-icons";
import classNames from "clsx";
import { useViewport } from "lib/hooks/useViewport";
import { useActiveNavItem } from "lib/hooks/useActiveNavItem";
import { IconLink } from "./nav/IconLink";
import { Link } from "./nav/NavLink";
import { ThemeSwitcher } from "./nav/ThemeSwitcher";

const links = [
  {
    name: "Home",
    href: "/",
  },
   {
    name: "About",
    href: "/about",
  },
  {
    name: "Team",
    href: "/team",
  },
   {
    name: "GIMO 2021",
    href: "/gimo2021",
  },
  {
   name: "Awards and Sponsors",
    href: "/awards"
  },
  {
    name: "Contact",
    href: "/#contact",
  },
 

];

export function Nav() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const viewport = useViewport();

  const [clickedRoute, setClickedRoute] = React.useState<boolean>(false);
  const wrapperRef = React.useRef<HTMLUListElement>(null);

  const { styles, isCurrent, handleMouseLeave, handleMouseOver, findActiveElement, setHover } =
    useActiveNavItem({ wrapperRef, isDisabled: menuOpen });

  React.useEffect(() => {
    setHover(false);
  }, [router]); // eslint-disable-line

  React.useEffect(() => {
    findActiveElement();
    setClickedRoute(false);
    // eslint-disable-next-line
  }, [router]);

  React.useEffect(() => {
    if (viewport > 768) {
      setMenuOpen(false);
    }
  }, [viewport]);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [router]);

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-center w-full px-5 h-15 bg-gray-50 dark:bg-blue"
      id="nav"
    >
      <nav className="flex items-center justify-between w-full h-20 max-w-4xl">
        <ul
          // reset back to the active item
          onMouseLeave={!clickedRoute ? handleMouseLeave : undefined}
          ref={wrapperRef}
          className={classNames(
            "h-full space-x-1 md:items-center",
            menuOpen
              ? "fixed w-full h-[22rem] top-0 left-0 z-50 flex items-center flex-col bg-gray-50 dark:bg-blue p-5 shadow-lg open-nav-animation"
              : "hidden md:flex relative",
          )}
        >
          {menuOpen ? null : (
            <div
              role="listitem"
              style={styles}
              className="absolute bg-gray-300 dark:bg-blue-2/70 p-2 px-3 duration-200 rounded-md shadow-sm top-1/2"
            />
          )}

          {links.map((link) => (
            <li
              className="z-50"
              key={link.href}
              data-href={link.href}
              data-current={isCurrent(link.href)}
              onMouseOver={(event) => {
                setHover(true);
                handleMouseOver(event);
              }}
            >
              <Link
                onClick={() => setClickedRoute(true)}
                menuOpen={menuOpen}
                href={link.href}
                isActive={isCurrent(link.href)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center h-full space-x-1">
          
          <li>
            <IconLink aria-label="Aops profile" href="https://gcurvature.vercel.app">
              <Github/>
            </IconLink>
          </li>
         
          <li>
            <ThemeSwitcher />
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
          className="z-50 flex flex-col w-8 md:hidden"
        >
          {menuOpen ? <X width={35} height={35} /> : <List width={30} height={30} />}
        </button>
      </nav>
    </header>
  );
}
