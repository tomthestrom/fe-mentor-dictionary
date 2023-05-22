import TypographyItem from "./TypographyItem";
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
    </form>
  );
}
export default TypographySwitcher;
