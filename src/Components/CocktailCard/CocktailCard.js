import React from "react";
import "./CocktailCard.scss";
//import { getPopularCocktail } from "../../API/CocktailDB";

export function CocktailCard(props) {
  return (
    <div className="cocktailCard">
      <img className="cocktailImg" alt="mojito" src={props.image} />
      <h1 className="cocktailName">{props.name}</h1>
      <div className="separator"></div>
      <ol className="ingredientList">
        {props.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol>
      <button
        onClick={(e) => {
          console.log(props.name, e.clientX);
        }}
      >
        Clic me
      </button>
    </div>
  );
}
