import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>A STYLE</h1>
      <p>لوحة التحكم</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
