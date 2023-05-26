const User = (function () {
  const SCHEME_KEY = "scheme";
  const DARK_SCHEME_VAL = "dark";
  const LIGHT_SCHEME_VAL = "light";

  const VALID_SCHEMES = [DARK_SCHEME_VAL, LIGHT_SCHEME_VAL];

  const setScheme = (schemeVal) => {
    localStorage.setItem(SCHEME_KEY, schemeVal);
  };

  const getScheme = () => localStorage.getItem(SCHEME_KEY);
  ;
  const setPreferredFontId = (fontId) => {
    localStorage.setItem("font", fontId);
  };

  const setPrefersDarkScheme = (bool) => {
    setScheme(bool === true ? DARK_SCHEME_VAL : LIGHT_SCHEME_VAL);
  };

  const getPreferredFontId = () => localStorage.getItem("font");

  //it's not enough to just check if he prefers dark scheme and use light otherwise
  //what if his system preferences are dark scheme, but on this app, he prefers light?
  //in that case User.getPrefersDarkScheme would return false, but the media query would return true
  //therefore we could accidentally reset his preference on page load
  // we need to have a check in place whether he has set a valid preferred scheme
  const hasPreferredScheme = () => {
    return VALID_SCHEMES.includes(getScheme());
  };

  const getPrefersDarkScheme = () => getScheme() === DARK_SCHEME_VAL;

  return {
    setPreferredFontId,
    setPrefersDarkScheme,
    getPreferredFontId,
    getPrefersDarkScheme,
    hasPreferredScheme
  }
})();

export default User;
