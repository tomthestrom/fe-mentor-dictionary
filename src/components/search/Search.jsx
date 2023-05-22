import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

/**
 * Houses the search bar
 * upon search via the search bar, the results are displayed in SearchResults
 */
function Search() {
  return (
    <>
      <SearchBar />
      <SearchResults />
    </>
  );
}
export default Search;
