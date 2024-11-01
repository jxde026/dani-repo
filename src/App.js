import React from "react";
import Turismo from "./componentes/turismo";
import { Route, Routes } from "react-router-dom";
import News from "./routes/News";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
