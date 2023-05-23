import PartOfSpeech from "./PartOfSpeech";

function SearchResults({ props }) {
  console.log(props);
  /**
   * used for retrieving audioUrl and phonetic transcription
   * Expected val: "audio" || "text"
   */
  const getFromPhonetics = (props, val) => {
    if (props.phonetics === undefined || props.phonetics.length === 0) {
      return null;
    }
    return props.phonetics.find(
      (item) => item[val] !== undefined && item[val].length > 0
    )[val];
  };

  const phonetic = props.phonetic ?? getFromPhonetics(props, "text");
  const audioUrl = getFromPhonetics(props, "audio");

  return (
    <main className="search-results">
      <div className="word-forms">
        <div className="word-forms__written">
          <h1 className="word-forms__word">{props.word}</h1>
          <span className="word-forms__phonetic">{phonetic}</span>
        </div>
        <div className="word-forms__audio">{audioUrl}</div>
      </div>
      {props.meanings.map((partOfSpeech) => (
        <PartOfSpeech key={partOfSpeech.partOfSpeech} props={partOfSpeech} />
      ))}
    </main>
  );
}
export default SearchResults;
