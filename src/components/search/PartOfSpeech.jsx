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

      <ul className="pof-speech__definitions">
        {definitions.map((definition, i) => {
          return (
            <li key={i} className="pof-speech__definition">
              {definition.definition}
            </li>
          );
        })}
      </ul>
      {synonyms.length > 0 && (
        <footer className="pof-speech__footer">
          <h3 className="pof-speech__synonyms">Synonyms</h3>

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
export default PartOfSpeech;
