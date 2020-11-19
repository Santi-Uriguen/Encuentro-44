import React from "react";
import "./styles/App.css";
import Tabla from "./components/Tabla.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tabla periódica de los elementos</h1>
      </header>
      <main>
        <Tabla />
      </main>
    </div>
  );
}

export default App;
