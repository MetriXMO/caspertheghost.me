import { Project } from "types/Project";
const url = "https://github.com/dev-caspertheghost";

const VIEW_CODE = "View Code";
const OPEN_PROJECT = "Open Project";

export const projects: Project[] = [
  {
    title: "Home inventory",
    description:
      "A home inventory app to keep track of items in your home (food items, tech, medical supplies, etc.).",
    buttons: [
      {
        url: "/case-study/home-inventory",
        name: "View case study",
      },
      {
        url: `${url}/home-inventory`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "SnailyCAD",
    description:
      "An open source Computer Aided Dispatch (CAD) for a game called FiveM, this is a web based integration for communities who love police roleplaying and dispatching.",
    buttons: [
      {
        url: `${url}/snaily-cadv3`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "GhostyBot",
    description:
      "A feature-rich Discord bot with +200 commands for Discord servers. Economy, util, fun, music, admin and more! Built with Next.js and Discord.js ",
    buttons: [
      {
        url: `${url}/ghostybot`,
        name: VIEW_CODE,
      },
      {
        name: OPEN_PROJECT,
        url: "https://ghostybot.caspertheghost.me",
      },
    ],
  },
  {
    title: "pastebin clone",
    description: "A Pastebin clone using next.js, faunaDB, next-auth and next-api-decorators.",
    buttons: [
      {
        url: `${url}/faunadb-pastebin-clone`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "notey.app",
    description: "A notes app to keep track of important things and share notes with others",
    buttons: [
      {
        url: "/case-study/notey.app",
        name: "View case study",
      },
      {
        url: "https://notey.caspertheghost.me",
        name: OPEN_PROJECT,
      },
    ],
  },
  {
    title: "pastebin-api",
    description: "A very simple pastebin npm package to interact with the pastebin api! ",
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
    title: "mysql.ts",
    description: "A simple node.js wrapper for mysql, simplified",
    buttons: [
      {
        url: `${url}/mysql.ts`,
        name: VIEW_CODE,
      },
      {
        name: "View on npm",
        url: "https://www.npmjs.com/package/@casper124578/mysql.ts",
      },
    ],
  },
  {
    title: "Other projects",
    description: "You can view all my other projects on GitHub below",
    buttons: [
      {
        url: `${url}?tab=repositories`,
        name: "Show projects",
      },
    ],
  },
];
