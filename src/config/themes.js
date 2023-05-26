//custom props used in CSS for different themes
const MAIN_BG_CLR = "--main-bg-color";
const MAIN_FONT_CLR = "--main-font-color";
const SEARCH_BG_CLR = "--search-bar-bg-color";
const SEARCH_PHOLDER_CLR = "--search-bar-placeholder-color";
const DRP_DWN_BG_CLR = "--drp-dwn-bg-color";
const DRP_DWN_B_SHDW = "--drp-dwn-b-shadow";


const lightMode = new Map();
const darkMode = new Map();

lightMode.set(MAIN_BG_CLR, "var(--color-white-FF)");
lightMode.set(MAIN_FONT_CLR, "var(--color-black-2D)");
lightMode.set(SEARCH_BG_CLR, "var(--color-grey-F4)");
lightMode.set(SEARCH_PHOLDER_CLR, "var(--color-grey-75)");
lightMode.set(DRP_DWN_BG_CLR, "var(--main-bg-color)");
lightMode.set(DRP_DWN_B_SHDW, "var(--box-shadow-dark)");

darkMode.set(MAIN_BG_CLR, "var(--color-black-05)");
darkMode.set(MAIN_FONT_CLR, "var(--color-white-FF)");
darkMode.set(SEARCH_BG_CLR, "var(--color-black-2D)");
darkMode.set(SEARCH_PHOLDER_CLR, "var(--color-grey-F4)");
darkMode.set(DRP_DWN_BG_CLR, "var(--search-bar-bg-color)");
darkMode.set(DRP_DWN_B_SHDW, "var(--box-shadow-purple)");

export { lightMode as lightModeCfg, darkMode as darkModeCfg };
