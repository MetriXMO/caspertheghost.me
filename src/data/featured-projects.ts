import { Project } from "types/Project";
const url = "https://github.com/dev-caspertheghost";

const VIEW_CODE = "View Code";
const OPEN_PROJECT = "Open Project";
const VIEW_CASE_STUDY = "View case study";

export const projects: Project[] = [
  {
    title: "SnailyCAD",
    description:
      "An open source Computer Aided Dispatch (CAD) for a game called FiveM, this is a web based integration for communities who love police roleplaying and dispatching. Loved by many communities.",
    buttons: [
      {
        url: "https://github.com/SnailyCAD/snaily-cadv4",
        name: VIEW_CODE,
      },
      {
        url: "https://snailycad.casper.dev",
        name: OPEN_PROJECT,
      },
    ],
  },
  {
    title: "GhostyBot",
    description:
      "A feature-rich Discord bot with over 150 commands. Economy, util, fun, music, admin and more! Used in over 250 servers and 130 000 users.",
    buttons: [
      {
        url: `${url}/ghostybot`,
        name: VIEW_CODE,
      },
      {
        name: OPEN_PROJECT,
        url: "https://ghostybot.casper.dev",
      },
    ],
  },
  {
    title: "notey.app",
    description: "A notes app to keep track of important things and share notes with others",
    buttons: [
      {
        url: "/case-study/notey.app",
        name: VIEW_CASE_STUDY,
      },
      {
        name: OPEN_PROJECT,
        url: "https://notey.casper.dev",
      },
    ],
  },
  {
    title: "Home inventory",
    description:
      "A home inventory app to keep track of items in your home (food items, tech, medical supplies, etc.).",
    buttons: [
      {
        url: "/case-study/home-inventory",
        name: VIEW_CASE_STUDY,
      },
      {
        url: `${url}/home-inventory`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "pastebin-api",
    description:
      "A simple npm package to interact with the Pastebin api. Downloaded over 10 000 times on npm.",
    buttons: [
      {
        url: `${url}/pastebin-api`,
        name: VIEW_CODE,
      },
      {
        name: "View on npm",
        url: "https://www.npmjs.com/package/pastebin-api",
      },
    ],
  },
  {
    title: "Network share",
    description:
      "A project to share files, images, videos, etc to other devices on the same network.",
    buttons: [
      {
        url: "/case-study/network-share",
        name: VIEW_CASE_STUDY,
      },
      {
        url: `${url}/network-share`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "new-tab",
    description:
      "This replaces the new-tab screen with a great looking dashboard that display the current time and weather with more widgets available.",
    buttons: [
      {
        url: `${url}/new-tab`,
        name: VIEW_CODE,
      },
      {
        url: "https://addons.mozilla.org/en-US/firefox/addon/new_tab1/",
        name: "Install addon",
      },
    ],
  },
  {
    title: "More projects",
    description: "You can view all my other projects on GitHub below",
    buttons: [
      {
        url: `${url}?tab=repositories`,
        name: "View all projects",
      },
    ],
  },
];
