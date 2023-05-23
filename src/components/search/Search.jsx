import { useState } from "react";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

/**
 * Houses the search bar
 * upon search via the search bar, the results are displayed in SearchResults
 */
function Search() {
  const [searchRes, setSearchRes] = useState({});

  return (
    <>
      <SearchBar setSearchRes={setSearchRes} />
      {searchRes && Object.keys(searchRes).length > 0 && <SearchResults props={searchRes} />}
    </>
  );
}
export default Search;
