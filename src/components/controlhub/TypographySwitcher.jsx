import TypographyItem from "./TypographyItem";
import Arrow from "../svg/Arrow";
/**
 * @TODO: Maybe put it into some config?
 */

const fonts = [
  {
    id: "mono",
    name: "Mono",
    active: true,
  },
  {
    id: "sans-serif",
    name: "Sans Serif",
    active: false,
  },
  {
    id: "serif",
    name: "Serif",
    active: false,
  },
];

function TypographySwitcher() {
  const activeFont = fonts.find(font => font.active);

  return (
    <form className="typography-switcher">
      <TypographyItem id={activeFont.id} name={activeFont.name}></TypographyItem>
      <button className="typography-switcher__arrow"><Arrow /></button>
    </form>
  );
}
export default TypographySwitcher;
