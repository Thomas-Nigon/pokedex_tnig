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
  }),
}; */
export default Navbar;
