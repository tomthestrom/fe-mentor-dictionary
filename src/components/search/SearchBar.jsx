import Search from "../svg/Search";

function SearchBar({ searchVal, onInputHandler, onSubmitHandler }) {

  return (
    <form className="search-bar" onSubmit={onSubmitHandler}>
      <input
        className="search-bar__input"
        aria-label="search bar"
        type="text"
        name="search-bar"
        placeholder="Search for any word..."
        value={searchVal}
        onInput={onInputHandler}
      />
      <button className="search-bar__submit" type="submit"><Search/></button>
    </form>
  );
}
export default SearchBar;
