import PropTypes from "prop-types"; // Import PropTypes

function PokemonCard(props) {
  const { name, imgSrc } = props.Pokemon;
  console.log("props:", props.Pokemon);
  console.log(imgSrc);
  return (
    <>
      {imgSrc ? (
        <figure>
          <img src={imgSrc} alt="a pokemon picture" />
          <figcaption>{name}</figcaption>
        </figure>
      ) : (
        "Dommage"
      )}
    </>
  );
}
PokemonCard.propTypes = {
  Pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};
export default PokemonCard;
// working function
/* function PokemonCard() {
  const {name, imgSrc} = props;
  console.log("props:", props);
  console.log(props.Pokemon.imgSrc);
  return (
    <>
      {props.Pokemon.imgSrc ? (
        <figure>
          <img src={props.Pokemon.imgSrc} alt="a pokemon picture" />
          <figcaption>{props.Pokemon.name}</figcaption>
        </figure>
      ) : (
        "Dommage"
      )}
    </>
  );
} */
