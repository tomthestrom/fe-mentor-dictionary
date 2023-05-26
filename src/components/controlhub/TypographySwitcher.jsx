import TypographyItem from "./TypographyItem";
import Arrow from "../svg/Arrow";
import { useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { setRootProp } from "../../utils/css";
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
  const [showFontList, setShowFontList] = useState(false);
  const inActiveFonts = fonts.filter((font) => font.id !== activeFont.id);

  const getFontById = (id) => fonts.find((font) => font.id === id);

  const handleLabelClick = (e, id) => {
    const nextFont = getFontById(id);
    setActiveFont(nextFont);
    setRootProp(BODY_FONT_CUSTOM_PROP, nextFont.cssFontFamily);
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    toggleFontList();
  };

  const toggleFontList = () => setShowFontList(!showFontList);
  const hideFontList = () => setShowFontList(false);

  const switcherRef = useOutsideClick(hideFontList);

  return (
    <form className="typography-switcher" ref={switcherRef}>
      <TypographyItem
        id={activeFont.id}
        name={activeFont.name}
        handleLabelClick={toggleFontList}
      />
      <button className="typography-switcher__arrow" onClick={handleBtnClick}>
        <Arrow />
      </button>
      {showFontList && (
        <ul className="typography-switcher__list" >
          <li key={activeFont.id} className="typography-switcher__list-item">
            <TypographyItem
              id={activeFont.id}
              name={activeFont.name}
              handleLabelClick={toggleFontList}
            />
          </li>
          {inActiveFonts.map((font) => {
            return (
              <li key={font.id} className="typography-switcher__list-item">
                <TypographyItem
                  id={font.id}
                  name={font.name}
                  handleLabelClick={handleLabelClick}
                />
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
}
export default TypographySwitcher;
