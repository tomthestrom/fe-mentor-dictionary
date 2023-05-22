function TypographySwitcher() {
  return (
    <form className="typography-switcher">
      <select aria-label="select font" name="select-font" id="">
        <option value="mono">Mono</option>
        <option value="sans-serif">Sans Serif</option>
        <option value="mono">Serif</option>
      </select>
    </form>
  );
}
export default TypographySwitcher;
