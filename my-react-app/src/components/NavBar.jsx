/* import { useState } from "react"; */
import PropTypes from "prop-types"; // Import PropTypes

function Navbar(props) {
  console.log("propzer", props);
  const index = props.pokemonIndex;
  const list = props.pokemonList;
  const setIndex = props.setIndex;
  /*   console.log("set index:", setIndex); */
  const Previous = () => {
    setIndex(index + 1);
  };
  const Next = () => {
    setIndex(index - 1);
  };

  return (
    <div>
      {index > 0 ? <button onClick={Next}>Suivant</button> : null}
      {index < list.length - 1 ? (
        <button onClick={Previous}>Precédent</button>
      ) : null}
    </div>
  );
}
/* Navbar.prototype = {
  setIndex: PropTypes.shape({
    setIndex: PropTypes.number.isRequired,
    pokemonIndex: PropTypes.number.isRequired,
    pokemonList: PropTypes.array.isRequired,

  }),
}; */
Navbar.propTypes = {
  setIndex: PropTypes.func.isRequired, // setIndex should be a function and is required
  pokemonIndex: PropTypes.number.isRequired, // pokemonIndex should be a number and is required
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired, // pokemonList should be an array of objects with name (string) and imgSrc (string, optional) properties and is required
};
export default Navbar;
