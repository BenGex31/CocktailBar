import "./styles.css";

import { CocktailCard } from "./Components/CocktailCard/CocktailCard";
import { cocktailList } from "./model/Cocktaillist";
import { AppBar } from "./Components/AppBar/AppBar";
import { useState } from "react";

export default function App() {
  const [cocktails, setCocktails] = useState(cocktailList);
  const handleSearch = (text) => {
    console.log(text);
    text === ""
      ? setCocktails(cocktailList)
      : setCocktails(
          cocktailList.filter((cocktail) =>
            cocktail.name.toLowerCase().startsWith(text.toLowerCase())
          )
        );
  };

  return (
    <div className="App">
      <AppBar filter={handleSearch} />
      {cocktails.map((cocktail) => (
        <CocktailCard
          image={cocktail.image}
          name={cocktail.name}
          ingredients={cocktail.ingredients}
        />
      ))}
    </div>
  );
}
