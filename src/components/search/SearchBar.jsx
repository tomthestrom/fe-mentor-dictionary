import PropTypes from "prop-types";
import { useState } from "react";
import Search from "../svg/Search";

const EMPTY_SEARCH_ERR = "Whoops, can’t be empty…";
const SEARCH_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const makeRequestURL = (word) => SEARCH_URL + encodeURIComponent(word);

function SearchBar({ setSearchRes }) {
  const [searchVal, setSearchVal] = useState("");
  const [isValError, setIsValError] = useState(false);

  const onInputHandler = (e) => {
    setSearchVal(e.target.value);
    setIsValError(false);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const wordToLookUp = searchVal.trim();

    if (wordToLookUp.length == 0) {
      setIsValError(true);
      setSearchRes();
      setSearchVal(wordToLookUp);
      return;
    }

    try {
      const response = await fetch(makeRequestURL(wordToLookUp));
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      setSearchRes(json[0]);
    } catch (e) {
      setSearchRes({});
    }

    setSearchVal(wordToLookUp);
  };

  return (
    <>
      <form className="search-bar" onSubmit={onSubmitHandler}>
        <input
          className={
            isValError
              ? "search-bar__input search-bar__input--error"
              : "search-bar__input"
          }
          aria-label="search bar"
          type="text"
          name="search-bar"
          placeholder="Search for any word..."
          value={searchVal}
          onInput={onInputHandler}
        />
        <button
          className={
            isValError
              ? "search-bar__submit search-bar__submit--error"
              : "search-bar__submit"
          }
          type="submit"
        >
          <Search />
        </button>
      </form>
      {isValError && (
        <div className="search-bar__error">{EMPTY_SEARCH_ERR}</div>
      )}
    </>
  );
}

SearchBar.propTypes = {
  setSearchRes: PropTypes.func,
};
export default SearchBar;
