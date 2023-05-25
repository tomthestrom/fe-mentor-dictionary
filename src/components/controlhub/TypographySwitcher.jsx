import TypographyItem from "./TypographyItem";
import Arrow from "../svg/Arrow";
import { useState } from "react";
/**
 * @TODO: Maybe put it into some config?
 */

const BODY_FONT_CUSTOM_PROP = "--default-font-family";

const fonts = [
  {
    id: "mono",
    name: "Mono",
    active: true,
    cssFontFamily: '"Inconsolata", monospace',
  },
  {
    id: "sans-serif",
    name: "Sans Serif",
    active: false,
    cssFontFamily: '"Inter", sans-serif',
  },
  {
    id: "serif",
    name: "Serif",
    active: false,
    cssFontFamily: '"Lora", serif',
  },
];

function TypographySwitcher() {
  const [activeFont, setActiveFont] = useState(
    fonts.find((font) => font.active)
  );
  const [showInactiveFonts, setShowInactiveFonts] = useState(false);

  const inActiveFonts = fonts.filter((font) => font.id !== activeFont.id);

  const getFontById = (id) => fonts.find((font) => font.id === id);

  const handleLabelClick = (e, id) => {
    // setShowInactiveFonts(false);
    const nextFont = getFontById(id);
    setActiveFont(nextFont);
    setBodyFont(nextFont.cssFontFamily);
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    setShowInactiveFonts(!showInactiveFonts);
  };

  const setBodyFont = (fontFamilyValue) => {
    document.documentElement.style.setProperty(
      BODY_FONT_CUSTOM_PROP,
      fontFamilyValue
    );
  };

  return (
    <form className="typography-switcher">
      <TypographyItem
        id={activeFont.id}
        name={activeFont.name}
        handleLabelClick={handleLabelClick}
      ></TypographyItem>
      {inActiveFonts.map((font) => {
        return (
          <TypographyItem
            key={font.id}
            id={font.id}
            name={font.name}
            handleLabelClick={handleLabelClick}
          />
        );
      })}
      <button className="typography-switcher__arrow" onClick={handleBtnClick}>
        <Arrow />
      </button>
    </form>
  );
}
export default TypographySwitcher;
