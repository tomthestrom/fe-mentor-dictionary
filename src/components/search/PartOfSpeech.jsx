import PropTypes from "prop-types";

/**
 * Contains the description of the word for the given part of speech (noun, verb, pronoun, etc.)
 */
function PartOfSpeech({ props }) {
  const { partOfSpeech, definitions, synonyms } = props;
  return (
    <section className="pof-speech">
      <header className="pof-speech__header">
        <h2 className="pof-speech__function">{partOfSpeech}</h2>
        <h3 className="pof-speech__meaning">Meaning</h3>
      </header>

      <ul className="pof-speech__entries">
        {definitions.map((definition, i) => {
          return (
            <li key={i} className="pof-speech__entry">
              <span className="pof-speech__definition">
                {definition.definition}
              </span>
              {definition.example && (
                <div className="pof-speech__example">{`"${definition.example}"`}</div>
              )}
            </li>
          );
        })}
      </ul>
      {synonyms.length > 0 && (
        <footer className="pof-speech__footer">
          <h3 className="pof-speech__synonyms-title">Synonyms</h3>

          <ul className="pof-speech__synonyms">
            {synonyms.map((synonym, i) => {
              return (
                <li key={i} className="pof-speech__synonym">
                  {synonym}
                </li>
              );
            })}
          </ul>
        </footer>
      )}
    </section>
  );
}

PartOfSpeech.propTypes = {
  props: PropTypes.object,
  partOfSpeech: PropTypes.array,
  definitions: PropTypes.array,
  synonyms: PropTypes.array,
};

export default PartOfSpeech;
