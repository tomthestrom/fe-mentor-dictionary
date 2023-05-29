import ThemeToggler from "./ThemeToggler";
import TypographySwitcher from "./TypographySwitcher";

/**
 * Visible at the top
 * Houses the:
 * Home button
 * Typography menu
 * Theme switcher
 */
const HOME_URL = document.location.href;
const LOGO_URL = "./logo.svg";

function ControlHub() {
  return (
    <div className="control-hub">
      <a className="control-hub__home" href={HOME_URL}>
        <img src={LOGO_URL} alt="Home" />
      </a>
      <div className="control-hub__controls">
        <TypographySwitcher />
        <ThemeToggler />
      </div>
    </div>
  );
}
export default ControlHub;
