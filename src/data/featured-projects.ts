import { Project } from "types/Project";

const VIEW_CODE = "View the paper";
const OPEN_PROJECT = "Download the paper";


export const projects: Project[] = [
  {
    title: "GIMO 2021  Day 1",
    description:
      "Check out the GIMO 2021 Day 1 Paper here.",
    buttons: [
      {
        url: "https://drive.google.com/file/d/1-toKPHPI55iJpYDbXcU2h5rK__lVC5lV/view",
        name: VIEW_CODE,
      },
      {
        url: "https://drive.google.com/u/2/uc?id=1-toKPHPI55iJpYDbXcU2h5rK__lVC5lV&export=download",
        name: OPEN_PROJECT,
      },
    ],
  },
  {
    title: "GIMO 2021  Day 2",
    description:
      "Check out the GIMO 2021  Day 2 Paper here",
    buttons: [
      {
        url: "https://drive.google.com/file/d/1-MLIbRM3-1-bEUAvKSMCVkkCghXyVTzq/view",
        name: VIEW_CODE,
      },
      {
        name: OPEN_PROJECT,
        url: "https://drive.google.com/u/2/uc?id=1-MLIbRM3-1-bEUAvKSMCVkkCghXyVTzq&export=download",
      },
    ],
  },
  ],
