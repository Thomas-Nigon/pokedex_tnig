import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    index: 0,
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
function App() {
  useEffect(() => {
    window.alert("hello pokemon trainer :)");
  }, []);

  const [poke, setIndex] = useState("0");
  return (
    <div>
      <Navbar setIndex={setIndex} poke={poke} pokemonList={pokemonList} />
      <PokemonCard Pokemon={pokemonList[poke]} />
    </div>
  );
}

export default App;
