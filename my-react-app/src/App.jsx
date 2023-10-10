import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
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
  const [pokemonIndex, setIndex] = useState(0);
  return (
    <div>
      {/* {pokemonIndex > 0 ? <button onClick={Next}>Suivant</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={Previous}>Precédent</button>
      ) : null} }*/}
      <Navbar
        setIndex={setIndex}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
      />
      <PokemonCard Pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
