import TypographyItem from "./TypographyItem";
import Arrow from "../svg/Arrow";
import { useEffect, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { setRootProp } from "../../utils/css";
import fonts from "../../config/fonts";
import UserConfig from "../../config/user";

const BODY_FONT_CUSTOM_PROP = "--default-font-family";

function TypographySwitcher() {
  const getFontById = (id) => fonts.find((font) => font.id === id);

  const getInitActiveFont = () => {
    const cfgFontId = UserConfig.getPreferredFontId();
    return getFontById(cfgFontId) ?? fonts.find((font) => font.default);
  };

  const [activeFont, setActiveFont] = useState(getInitActiveFont());

  const [showFontList, setShowFontList] = useState(false);
  const inActiveFonts = fonts.filter((font) => font.id !== activeFont.id);

  const handleLabelClick = (e, id) => {
    const nextFont = getFontById(id);
    setActiveFont(nextFont);
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    toggleFontList();
  };

  const toggleFontList = () => setShowFontList(!showFontList);
  const hideFontList = () => setShowFontList(false);

  const switcherRef = useOutsideClick(hideFontList);

  useEffect(() => {
    UserConfig.setPreferredFontId(activeFont.id);
    setRootProp(BODY_FONT_CUSTOM_PROP, activeFont.cssFontFamily);
  }, [activeFont]);

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
        <ul className="typography-switcher__list">
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
