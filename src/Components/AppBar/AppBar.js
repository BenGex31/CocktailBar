import React from "react";
import "./AppBar.css";

export function AppBar(props) {
  return (
    <div className="AppBar">
      <h1>Mon bar</h1>
      <input placeholder="Search..." />
    </div>
  );
}
