import { Cocktail } from "./Cocktail";
import mojito from "../assets/cocktails/mojito.png";
import ginnFizz from "../assets/cocktails/ginn_fizz.png";
import blueLagoon from "../assets/cocktails/blue_lagoon.png";
import maiTai from "../assets/cocktails/mai_tai.png";
import sexOnTheBeach from "../assets/cocktails/sex-on-the-beach.png";
import americano from "../assets/cocktails/americano.png";
import daiquiri from "../assets/cocktails/daiquiri.png";
import dryMartini from "../assets/cocktails/dry_martini.png";
import gimlet from "../assets/cocktails/gimlet.png";
import margarita from "../assets/cocktails/margarita.png";
import mimosa from "../assets/cocktails/mimosa.png";
import sidecar from "../assets/cocktails/sidecar.png";
import tequila_sunrise from "../assets/cocktails/tequila_sunrise.png";
import ti_punch from "../assets/cocktails/ti_punch.png";
import vodka_orange from "../assets/cocktails/vodka_orange.png";
import white_lady from "../assets/cocktails/white_lady.png";


export const cocktailList = [
  new Cocktail("mojito", mojito, [
    "6 cl rhum",
    "3 cl jus de citron vert",
    "7 feuilles de menthe",
    "2 cl sirop sucre de cannes",
    "eau gazeuse"
  ]),
  new Cocktail("gin fizz", ginnFizz, [
    "6 cl gin",
    "4 cl jus de citron",
    "7 feuilles de menthe",
    "2 cl sirop sucre canne",
    "12 cl eau gazeuse"
  ]),
  new Cocktail("blue lagoon", blueLagoon, [
    "4 cl vodka",
    "3 cl curacao",
    "2 cl jus de citron"
  ]),
  new Cocktail("mai tai", maiTai, [
    "3 cl rhum ambré",
    "3 cl rhum blanc",
    "2 cl triple sec",
    "3 cl jus de citron",
    "1 cl sirop sucre canne"
  ]),
  new Cocktail(
    "sex on the beach",
    sexOnTheBeach,
    ["3 cl vodka", "5 cl jus ananas", "2 cl crème de pêche", "10 cl cramberrie"]
  ),
  new Cocktail("americano", americano, [
    "2 cl martini",
    "4 cl campari",
    "eau gazeuse"
  ]),
  new Cocktail("daiquiri", daiquiri, [
    "4 cl rhum",
    "2 cl citron vert",
    "1 cl sirop sucre canne"
  ]),
  new Cocktail("dry martini", dryMartini, [
    "5 cl gin",
    "2 cl martini"
  ]),
  new Cocktail("gimlet", gimlet, [
    "8 cl gin",
    "2 cl lime cordial"
  ]),
  new Cocktail("margarita", margarita, [
    "5 cl tequila",
    "3 cl triple sec",
    "2 cl jus citron vert"
  ]),
  new Cocktail("mimosa", mimosa, [
    "4 cl champagne",
    "8 cl jus d'orange",
    "1 cuillère triple sec"
  ]),
  new Cocktail("side car", sidecar, [
    "2 cl triple sec",
    "5 cl cognac",
    "2 cl jus citron"
  ]),
  new Cocktail(
    "tequila sunrise",
    tequila_sunrise,
    ["6 cl tequila", "12 cl jus d'orange", "2 cl sirop grenadine"]
  ),
  new Cocktail("ti' punch", ti_punch, [
    "6 cl rhum blanc",
    "2 cl sirop sucre canne",
    "1 tranche de citron vert"
  ]),
  new Cocktail(
    "vodka orange",
    vodka_orange,
    ["4 cl vodka", "12 cl jus d'orange"]
  ),
  new Cocktail("white lady", white_lady, [
    "2 cl gin",
    "2 cl triple sec",
    "2 cl jus citron vert"
  ])
];
