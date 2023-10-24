import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./views/Home";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
