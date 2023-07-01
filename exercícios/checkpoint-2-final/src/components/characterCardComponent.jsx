import FavoriteButton from "./favoriteButton";

function Card(data){
  data=data.character
  return (
    <>
    <div key={data.id}>
      <img src={data.image} width={100} alt={data.name} />
      <p>{data.name}</p>
      <FavoriteButton character={data}/>
    </div>
    </>
  );
}

export default Card;
