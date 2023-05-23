import { useState } from "react";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


/**
 * Houses the search bar
 * upon search via the search bar, the results are displayed in SearchResults
 */
function Search() {
  const [searchRes, setSearchRes] = useState({});
  const [gotResult, setGotResult] = useState(false);



  return (
    <>
      <SearchBar setSearchRes={setSearchRes} setGotResult={setGotResult}/>
      {gotResult && <SearchResults props={searchRes}/>}
    </>
  );
}
export default Search;
