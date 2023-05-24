import NewWindow from "../svg/NewWindow";

function Footer({sourceUrl}) {
  return (
    <footer className="footer-results">
      <small className="footer-results__small">
        <div className="footer-results__source">Source</div>
        <a target="_blank" href={sourceUrl} className="footer-results__link">
          <span>{sourceUrl}</span>
          <NewWindow />
        </a>
      </small>
    </footer>
  );
}
export default Footer;
