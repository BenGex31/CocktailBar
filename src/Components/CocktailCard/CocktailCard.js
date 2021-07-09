import React from "react";

export function CocktailCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <ol>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol>
    </div>
  );
}
