import FavoriteButton from "./favoriteButton";

function Card(data){
  let char = data.character;
  return (
    <>
    <div key={char.id}>
      <img src={char.image} width={100} alt={char.name} />
      <p>{char.name}</p>
      <FavoriteButton character={char}/>
    </div>
    </>
  );
}

export default Card;
