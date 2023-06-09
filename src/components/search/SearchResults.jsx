import PropTypes from "prop-types";
import { useRef } from "react";
import Play from "../svg/Play";
import PartOfSpeech from "./PartOfSpeech";
import Footer from "./Footer";

function SearchResults({ props }) {
  const { phonetic, phonetics, word, meanings, sourceUrls } = props;
  const audioRef = useRef(null);
  const handleClick = () => {
    audioRef.current.play();
  };

  const defaultPhonetic = phonetic ?? "";

  /**
   * Sometimes the default value (props.phonetic) is a "strange one"
   * consisting of too few chars
   * here we check whether there's a longer phonetic transcription
   */
  const phoneticTrans = phonetics?.reduce((acc, val) => {
    if (val.text && val.text.length > acc.length) {
      acc = val.text;
    }
    return acc;
  }, defaultPhonetic);

  const audioUrl = phonetics?.reduce((url, item) => {
    if (item.audio && item.audio.length > 0) {
      url = item.audio;
    }
    return url;
  }, null);

  const sourceUrl = sourceUrls[0] ?? "";

  return (
    <>
      <main className="search-results">
        <header className="word-forms">
          <h1 className="word-forms__word">{word}</h1>
          {phoneticTrans && (
            <figcaption className="word-forms__spoken">
              <figcaption className="word-forms__phonetic">
                {phoneticTrans}
              </figcaption>
              <audio
                ref={audioRef}
                id="word-recording"
                src={audioUrl}
                className="word-forms__audio"
              ></audio>
            </figcaption>
          )}
          {audioUrl && (
            <button
              onClick={handleClick}
              aria-controls="word-recording"
              className="word-forms__play"
            >
              <Play />
            </button>
          )}
        </header>
        {meanings.map((partOfSpeech) => (
          <PartOfSpeech key={partOfSpeech.partOfSpeech} props={partOfSpeech} />
        ))}
      </main>
      {sourceUrl && <Footer sourceUrl={sourceUrl} />}
    </>
  );
}

SearchResults.propTypes = {
  props: PropTypes.object,
  word: PropTypes.string,
  phonetic: PropTypes.array,
  phonetics: PropTypes.array,
  meanings: PropTypes.array,
  sourceUrls: PropTypes.array,
};

export default SearchResults;
