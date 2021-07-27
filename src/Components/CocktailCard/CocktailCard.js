import React /*useContext*/ from "react";
import "./CocktailCard.scss";
//import { CocktailContext } from "../../App";
//import { Cocktail } from "../../model/Cocktail";

export function CocktailCard(props) {
  //const [cocktails, setCocktails] = useContext(CocktailContext);
  //console.log(cocktails);

  return (
    <div className="cocktailCard">
      <img className="cocktailImg" alt={props.name} src={props.image} />
      <h1 className="cocktailName">{props.name}</h1>
      <div className="separator"></div>
      <ol className="ingredientList">
        {props.ingredients.map((ingredient) => (
          <li key={ingredient.toString()}>{ingredient}</li>
        ))}
      </ol>
    </div>
  );
}
