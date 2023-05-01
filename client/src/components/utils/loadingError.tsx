import "./index.css";

export default function loadingError() {
  return (
    <div className="circ">
      <div className="load">Server Error</div>
      <div className="hands"></div>
      <div className="body"></div>
      <div className="head">
        <div className="eye"></div>
      </div>
    </div>
  );
}
