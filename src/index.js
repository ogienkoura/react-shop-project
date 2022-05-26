import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
  <>
    <h1>Hello app.js</h1>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  </>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
