function Navbar(props) {
  const [pokemonIndex, setCount] = useState(0);
  console.log(pokemonIndex);
  const Previous = () => {
    setCount(pokemonIndex + 1);
  };
  const Next = () => {
    setCount(pokemonIndex - 1);
  };
  <div>
    {pokemonIndex > 0 ? <button onClick={Next}>Suivant</button> : null}
    {pokemonIndex < pokemonList.length - 1 ? (
      <button onClick={Previous}>Precédent</button>
    ) : null}

    <PokemonCard Pokemon={pokemonList[pokemonIndex]} />
  </div>;
}

export default Navbar;
