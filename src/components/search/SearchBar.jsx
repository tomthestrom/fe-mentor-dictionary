import Search from "../svg/Search";
function SearchBar() {
  return (
    <form className="search-bar">
      <input
        className="search-bar__input"
        aria-label="search bar"
        type="text"
        name="search-bar"
        placeholder="Search for any word..."
      />
      <button className="search-bar__submit" type="submit"><Search/></button>
    </form>
  );
}
export default SearchBar;
