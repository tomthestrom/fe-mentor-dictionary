import { useEffect, useState } from "react";
import { lightSchemeCfg, darkSchemeCfg } from "../../config/themes";
import { setRootProp } from "../../utils/css";
import UserConfig from "../../config/user";
import Moon from "../svg/Moon";

function ThemeToggler() {
  const getInitIsDark = () => {
    const systemPref =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return UserConfig.hasPreferredScheme()
      ? UserConfig.getPrefersDarkScheme()
      : systemPref;
  };

  const [isDark, setIsDark] = useState(getInitIsDark());

  const setScheme = (isDark) => {
    //Type: Map
    const config = isDark ? darkSchemeCfg : lightSchemeCfg;
    config.forEach((value, property) => {
      setRootProp(property, value);
    });
  };

  const onThemeToggle = (e) => {
    setIsDark(e.target.checked);
  };

  useEffect(() => {
    UserConfig.setPrefersDarkScheme(isDark);
    setScheme(isDark);
  }, [isDark]);

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
