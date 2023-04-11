import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./containers/Pokedex";
import AppNavigator from "./components/AppNavigator";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AppNavigator />
        <Routes>
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
