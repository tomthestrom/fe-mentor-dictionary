import { useState } from "react";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import NoResults from "./NoResults";

/**
 * Houses the search bar
 * upon search via the search bar, the results are displayed in SearchResults
 */
function Search() {
  const [searchRes, setSearchRes] = useState({});

  return (
    <>
      <SearchBar setSearchRes={setSearchRes} />
      {searchRes && Object.keys(searchRes).length > 0 && (
        <SearchResults props={searchRes} />
      )}
      {searchRes && Object.keys(searchRes).length === 0 && <NoResults />}
    </>
  );
}
export default Search;
