import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Layout from "./pages/layout";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/trails" element={<App />} />
      <Route path="/menu" element={<Layout />} />
    </Routes>
  </BrowserRouter>
);
