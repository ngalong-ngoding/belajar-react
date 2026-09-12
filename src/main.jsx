import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element="hello world" />
        <Route path="concerts">
          <Route index element={<p>Concert index</p>} />
          <Route path=":city" element={<span>City</span>} />
          <Route path="jakarta" element={<span>Persija</span>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
