import { useState } from "react";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

/**
 * Houses the search bar
 * upon search via the search bar, the results are displayed in SearchResults
 */
function Search() {
  const [searchVal, setSearchVal] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onInputHandler = (e) => setSearchVal(e.target.value);

  return (
    <>
      <SearchBar 
      searchVal={searchVal}
      onSubmitHandler={onSubmitHandler}
      onInputHandler={onInputHandler}
      />
      <SearchResults />
    </>
  );
}
export default Search;
