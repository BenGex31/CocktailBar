import React, { useContext } from "react";
import "./CocktailCard.scss";
import { CocktailContext } from "../../App";
import { Cocktail } from "../../model/Cocktail";

export function CocktailCard(props) {
  const [cocktails, setCocktails] = useContext(CocktailContext);
  console.log(cocktails);

  const handleClick = () => {
    setCocktails([
      new Cocktail("mojito", require("../../assets/cocktails/mojito.png"), [
        "6 cl rhum",
        "3 cl jus de citron vert",
        "7 feuilles de menthe",
        "2 cl sirop sucre de cannes",
        "eau gazeuse"
      ]),
      new Cocktail(
        "gin fizz",
        require("../../assets/cocktails/ginn_fizz.png"),
        [
          "6 cl gin",
          "4 cl jus de citron",
          "7 feuilles de menthe",
          "2 cl sirop sucre canne",
          "12 cl eau gazeuse"
        ]
      )
    ]);
  };

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
      <button onClick={handleClick}>clic me</button>
    </div>
  );
}
