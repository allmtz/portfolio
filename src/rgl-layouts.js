const projectCardHeight = 10;
const projectCardWidth = 5;

export const defaultLayout = [
  { i: "intro", x: 0, y: 0, w: 4, h: 13 },
  { i: "avatar", x: 4, y: 0, w: 2, h: 13 },
  { i: "location", x: 6, y: 0, w: 4, h: 2 },
  { i: "skills", x: 6, y: 0, w: 4, h: 11 },

  { i: "scoot", x: 0, y: 5, w: projectCardWidth, h: projectCardHeight },
  { i: "movie", x: 5, y: 5, w: projectCardWidth, h: projectCardHeight },

  { i: "kanban", x: 0, y: 5, w: projectCardWidth, h: projectCardHeight },
  { i: "gallery", x: 5, y: 5, w: projectCardWidth, h: projectCardHeight },

  { i: "hk", x: 0, y: 5, w: projectCardWidth, h: projectCardHeight },
  { i: "pomo", x: 5, y: 5, w: projectCardWidth, h: projectCardHeight },

  { i: "finelines", x: 0, y: 5, w: projectCardWidth, h: projectCardHeight },
];

export const projectsLayout = [
  { i: "intro", x: 0, y: 1, w: 4, h: 13 },
  { i: "avatar", x: 4, y: 1, w: 2, h: 13 },
  { i: "location", x: 6, y: 1, w: 4, h: 2 },
  { i: "skills", x: 6, y: 1, w: 4, h: 11 },

  { i: "scoot", x: 0, y: 0, w: projectCardWidth, h: projectCardHeight },
  { i: "movie", x: 5, y: 0, w: projectCardWidth, h: projectCardHeight },

  { i: "kanban", x: 0, y: 0, w: projectCardWidth, h: projectCardHeight },
  { i: "gallery", x: 5, y: 0, w: projectCardWidth, h: projectCardHeight },

  { i: "hk", x: 0, y: 0, w: projectCardWidth, h: projectCardHeight },
  { i: "pomo", x: 5, y: 0, w: projectCardWidth, h: projectCardHeight },

  { i: "finelines", x: 0, y: 0, w: projectCardWidth, h: projectCardHeight },
];

export const skillsLayout = [
  { i: "intro", x: 8, y: 1, w: 4, h: 11 },
  { i: "avatar", x: 4, y: 1, w: 2, h: 13 },
  { i: "location", x: 6, y: 1, w: 4, h: 2 },
  { i: "skills", x: 0, y: 0, w: 4, h: 13 },

  { i: "scoot", x: 0, y: 5, w: projectCardWidth, h: projectCardHeight },
  { i: "movie", x: 5, y: 5, w: projectCardWidth, h: projectCardHeight },

  { i: "kanban", x: 0, y: 5, w: projectCardWidth, h: projectCardHeight },
  { i: "gallery", x: 5, y: 5, w: projectCardWidth, h: projectCardHeight },

  { i: "hk", x: 0, y: 5, w: projectCardWidth, h: projectCardHeight },
  { i: "pomo", x: 5, y: 5, w: projectCardWidth, h: projectCardHeight },

  { i: "finelines", x: 0, y: 5, w: projectCardWidth, h: projectCardHeight },
];

// skillsLayout alternative. <Location> spans the entire grid
// NOTE: this layout does not include the fine lines project
// [
//   { i: "intro", x: 8, y: 1, w: 4, h: 13 },
//   { i: "avatar", x: 4, y: 1, w: 2, h: 13 },
//   { i: "location", x: 6, y: 2, w: 10, h: 2 },
//   { i: "skills", x: 0, y: 0, w: 4, h: 13 },

//   { i: "scoot", x: 0, y: 5, w: projectCardWidth, h: projectCardHeight },
//   { i: "movie", x: 5, y: 5, w: projectCardWidth, h: projectCardHeight },

//   { i: "kanban", x: 0, y: 5, w: projectCardWidth, h: projectCardHeight },
//   { i: "gallery", x: 5, y: 5, w: projectCardWidth, h: projectCardHeight },

//   { i: "hk", x: 0, y: 5, w: projectCardWidth, h: projectCardHeight },
//   { i: "pomo", x: 5, y: 5, w: projectCardWidth, h: projectCardHeight },
// ]
