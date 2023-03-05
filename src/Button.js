import React from "react";
import "./Button.css";

export default function Button() {
  return <button> Dark Theme </button>;

  function changeTheme() {
    let body = document.querySelector("body");

    if (body.classList.contains("black")) {
      body.classList.remove("black");
    } else {
      body.classList.add("black");
    }
  }

  let themeButton = document.querySelector("button");
  themeButton.addEventListener("click, ChangeTheme");
}
