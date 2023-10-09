function PokemonCard() {
  const PokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  let Pokemon = PokemonList[0];
  return (
    <>
      {Pokemon.imgSrc ? (
        <figure>
          <img src={Pokemon.imgSrc} alt="a pokemon picture" />
          <figcaption>{Pokemon.name}</figcaption>
        </figure>
      ) : (
        "Dommage"
      )}
    </>
  );
}

export default PokemonCard;
