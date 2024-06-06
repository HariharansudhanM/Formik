import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BookProvider from "./Context/BookProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BookProvider>
);
