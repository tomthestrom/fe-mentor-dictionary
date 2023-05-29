import  PropTypes  from "prop-types";
function TypographyItem({ id, name, handleLabelClick }) {
  return (
    <>
      <label
        onClick={(e) => handleLabelClick(e, id)}
        className="typography-switcher__label"
        htmlFor={id}
      >
        {name}
      </label>
      <input
        className="typography-switcher__radio"
        type="radio"
        name="font-name"
        id={id}
      />
    </>
  );
}

TypographyItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  handleLabelClick: PropTypes.func,
};

export default TypographyItem;
