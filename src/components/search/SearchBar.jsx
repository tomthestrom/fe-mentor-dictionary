import { useState } from "react";
import Search from "../svg/Search";

const SEARCH_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const makeRequestURL = (word) => SEARCH_URL + encodeURIComponent(word);

function SearchBar({setSearchRes}) {
  const [searchVal, setSearchVal] = useState("");

  const onInputHandler = (e) => setSearchVal(e.target.value);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(makeRequestURL(searchVal));
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      setSearchRes(json[0]);
    } catch (e) {
      setSearchRes({});
    }
  };

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
      <button className="search-bar__submit" type="submit">
        <Search />
      </button>
    </form>
  );
}
export default SearchBar;
