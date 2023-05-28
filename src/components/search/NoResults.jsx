function NoResults() {
  return (
    <main className="no-results">
      <div className="no-results__emoticon">😕</div>
      <h1 className="no-results__heading">No Definitions Found</h1>
      <p className="no-results__text">
        Sorry, we couldn't find definitions for the word you were looking for.
        You can try the search again at later time or head to the web instead.
      </p>
    </main>
  );
}
export default NoResults;
