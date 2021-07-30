import React from "react";
import "./AppBar.css";
import TextField from "@material-ui/core/TextField";

export function AppBar(props) {
  return (
    <div className="AppBar">
      <h1>Mon bar</h1>
      <TextField
        id="outlined-basic"
        label="Search cocktails"
        variant="outlined"
        color="secondary"
        onChange={(event) => {
          props.filter(event.target.value);
        }}
      />
    </div>
  );
}
