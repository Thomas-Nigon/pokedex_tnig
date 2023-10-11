import PropTypes from "prop-types"; // Import PropTypes

function Navbar(props) {
  const pokemonList = props.pokemonList;
  const setIndex = props.setIndex;
  console.log("propzer", props);
  console.log("list:", pokemonList);
  const handleclick = (pokemon, index) => {
    setIndex(index);
    console.log("nom du pokemon:", pokemon.name);
    pokemon.name === "pikachu" ? window.alert("pikapika") : null;
  };
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handleclick(pokemon, index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
Navbar.propTypes = {
  setIndex: PropTypes.func.isRequired, // setIndex should be a function and is required
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired, // pokemonList should be an array of objects with name (string) and imgSrc (string, optional) properties and is required
};
export default Navbar;
