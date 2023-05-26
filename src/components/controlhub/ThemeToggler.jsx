import { useEffect, useState } from "react";
import { lightModeCfg, darkModeCfg } from "../../config/themes";
import { setRootProp } from "../../utils/css";
import Moon from "../svg/Moon";

function ThemeToggler() {
  const prefersDarkScheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(prefersDarkScheme);

  const onThemeToggle = (e) => {
    const nextIsDark = e.target.checked;
    setIsDark(nextIsDark);

    //Type: Map
    const config = nextIsDark ? darkModeCfg : lightModeCfg;

    config.forEach((value, property) => {
      setRootProp(property, value);
    });
  };

  return (
    <form className="theme-toggler">
      <input
        id="theme-toggler"
        className="theme-toggler__checkbox"
        aria-label="theme switcher"
        type="checkbox"
        name="theme-toggle"
        checked={isDark}
        onChange={onThemeToggle}
      />
      <label htmlFor="theme-toggler" className="theme-toggler__moon">
        <Moon />
      </label>
    </form>
  );
}
export default ThemeToggler;
