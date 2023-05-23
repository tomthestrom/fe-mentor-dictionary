import { useRef } from "react";
import Play from "../svg/Play";
import PartOfSpeech from "./PartOfSpeech";

function SearchResults({ props }) {
  const audioRef = useRef(null);
  const handleClick = () => {
    audioRef.current.play();
  }
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
      <section className="word-forms">
        <h1 className="word-forms__word">{props.word}</h1>
        <figcaption className="word-forms__spoken">
          <figcaption className="word-forms__phonetic">{phonetic}</figcaption>
          <audio
            ref={audioRef}
            id="word-recording"
            src={audioUrl}
            className="word-forms__audio"
          ></audio>
        </figcaption>
        <button onClick={handleClick} aria-controls="word-recording" className="word-forms__play">
          <Play />
        </button>
      </section>
      {props.meanings.map((partOfSpeech) => (
        <PartOfSpeech key={partOfSpeech.partOfSpeech} props={partOfSpeech} />
      ))}
    </main>
  );
}
export default SearchResults;
