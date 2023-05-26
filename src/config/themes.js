//custom props used in CSS for different themes
const MAIN_BG_CLR = "--main-bg-color";
const MAIN_FONT_CLR = "--main-font-color";
const SEARCH_BG_CLR = "--search-bar-bg-color";
const SEARCH_PHOLDER_CLR = "--search-bar-placeholder-color";
const DRP_DWN_BG_CLR = "--drp-dwn-bg-color";
const DRP_DWN_B_SHDW = "--drp-dwn-b-shadow";


const lightScheme = new Map();
const darkScheme = new Map();

lightScheme.set(MAIN_BG_CLR, "var(--color-white-FF)");
lightScheme.set(MAIN_FONT_CLR, "var(--color-black-2D)");
lightScheme.set(SEARCH_BG_CLR, "var(--color-grey-F4)");
lightScheme.set(SEARCH_PHOLDER_CLR, "var(--color-grey-75)");
lightScheme.set(DRP_DWN_BG_CLR, "var(--main-bg-color)");
lightScheme.set(DRP_DWN_B_SHDW, "var(--box-shadow-dark)");

darkScheme.set(MAIN_BG_CLR, "var(--color-black-05)");
darkScheme.set(MAIN_FONT_CLR, "var(--color-white-FF)");
darkScheme.set(SEARCH_BG_CLR, "var(--color-black-2D)");
darkScheme.set(SEARCH_PHOLDER_CLR, "var(--color-grey-F4)");
darkScheme.set(DRP_DWN_BG_CLR, "var(--search-bar-bg-color)");
darkScheme.set(DRP_DWN_B_SHDW, "var(--box-shadow-purple)");

export { lightScheme as lightSchemeCfg, darkScheme as darkSchemeCfg };
