import "./styles.css";

import { CocktailCard } from "./Components/CocktailCard/CocktailCard";
import { cocktailList } from "./model/Cocktaillist";

export default function App() {
  return (
    <div className="App">
      {cocktailList.map((cocktail) => (
        <CocktailCard
          image={cocktail.image}
          name={cocktail.name}
          ingredients={cocktail.ingredients}
        />
      ))}
    </div>
  );
}
