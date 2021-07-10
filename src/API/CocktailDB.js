export function getPopularCocktail() {
  const url = "https://the-cocktail-db.p.rapidapi.com/popular.php";

  return fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "396290a864msh66aa9601335d602p11525djsn6bbbda71e9eb",
      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
    }
  })
    .then((response) => {
      console.log(response);
      response.json();
    })
    .catch((err) => {
      console.error(err);
    });
}
