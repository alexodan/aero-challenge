const Breakpoints = {
  Mobile: "360px",
  Tablet: "720px",
  Laptop: "900px",
  Desktop: "1440px",
  DesktopXL: "1920px",
  DesktopXXL: "2560px",
};

export const MediaQueries = {
  FromMobile: `@media(min-width: ${Breakpoints.Mobile})`,
  FromTablet: `@media(min-width: ${Breakpoints.Tablet})`,
  FromLaptop: `@media(min-width: ${Breakpoints.Laptop})`,
  FromDesktop: `@media(min-width: ${Breakpoints.Desktop})`,
  FromDesktopXL: `@media(min-width: ${Breakpoints.DesktopXL})`,
  FromDesktopXXL: `@media(min-width: ${Breakpoints.DesktopXXL})`,
};

export const SORT_OPTIONS = [
  {
    value: "lowest-price",
    label: "Lowest Price",
  },
  {
    value: "highest-price",
    label: "Highest Price",
  },
];

export const Colors = {
  Primary: "#16DBFF",
  Secondary: "rgb(200, 200, 200)",
};
