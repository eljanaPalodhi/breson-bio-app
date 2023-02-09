import React from "react";
import "./ImageGallery.css";
import paris from "./images/paris.jpg";
import stares from "./images/stares.jpg";
import women from "./images/women.jpg";

export default function ImageGallery() {
  return (
    <div className="image-gallery">
      <img src={paris} alt="paris" />
      <img src={stares} alt="stares" />
      <img src={women} alt="women" />
    </div>
  );
}
