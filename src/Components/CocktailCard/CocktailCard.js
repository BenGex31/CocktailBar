import React, { useState } from "react";
import "./CocktailCard.scss";
//import { getPopularCocktail } from "../../API/CocktailDB";

export function CocktailCard(props) {
  const [count, setCount] = useState(0);

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
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}
