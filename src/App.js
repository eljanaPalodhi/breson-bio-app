import React from "react";
import "./App.css";
import brussels from "./images/brussels.jpg";
import ImageGallery from "./ImageGallery";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <div class="container">
          <h1>Henri Cartier-Bresson</h1>
          <img class="brussels" src={brussels} alt="brussels" />
          <h2>The Master of Black-and-White Photography</h2>
          <p>
            As a pioneer of modern photojournalism and co-founder of the Magnum
            Agency, Henri Cartier-Bresson is without doubt one of the greatest
            photographers of all time and has known since the 1930’s how to
            consistently set new standards.
          </p>
          <ImageGallery />
          <a
            href="https://de.wikipedia.org/wiki/Henri_Cartier-Bresson"
            target="_blank"
          >
            Learn more on wikipedia
          </a>
        </div>
        <footer>Coded by Eljana Palodhi</footer>
      </header>
    </div>
  );
}

export default App;
