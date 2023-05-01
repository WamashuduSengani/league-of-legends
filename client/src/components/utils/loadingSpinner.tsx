import "./index.css";

export default function loadingSpinner() {
  return (
    <div className="spinnerContainer">
      <div className="spinner"></div>
      <div className="loader">
        <p>loading</p>
        <div className="words">
          <span className="word">champions...</span>
          <span className="word">champions...</span>
          <span className="word">champions...</span>
          <span className="word">champions...</span>
          <span className="word">champions...</span>
        </div>
      </div>
    </div>
  );
}
