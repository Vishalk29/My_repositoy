import React from "react";
import "./SearchBox.style.css";

export const SearBox = ({ placeholder, handlechange }) => (
  <input
  className="search"
    type="search"
    placeholder={placeholder}
    onChange={handlechange}
  />
);
