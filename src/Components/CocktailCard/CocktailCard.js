import React from "react";
import "./CocktailCard.scss";

export function CocktailCard(props) {
  return (
    <div className="cocktailCard">
      <img
        className="cocktailImg"
        alt="mojito"
        src={require("../../assets/cocktails/mojito.png")}
      />
      <h1 className="cocktailName">{props.name}</h1>
      <div className="separator"></div>
      <ol className="ingredientList">
        {props.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol>
    </div>
  );
}
