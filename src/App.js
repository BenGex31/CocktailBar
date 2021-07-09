import "./styles.css";

import { CocktailCard } from "./Components/CocktailCard/CocktailCard";

export default function App() {
  return (
    <div className="App">
      <CocktailCard
        name="Mojito"
        ingredients={[
          "6 cl rhum",
          "3 cl jus de citron vert",
          "7 feuilles de menthe",
          "2 cl sirops sucre de cannes",
          "eau gazeuse"
        ]}
      />
    </div>
  );
}
