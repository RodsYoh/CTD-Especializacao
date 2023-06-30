import fullStar from "../images/fullStar.png";
import emptyStar from "../images/emptyStar.png"

const Card = (character) => {
  return (
    <>
    {console.log(character)}
    <div key={character.id}>
      <img src={character.image} width={100} alt={character.name} />
      <p>{character.name}</p>
      <button><img width={20} src={fullStar} alt="" /></button>
      <button><img width={20} src={emptyStar} alt="" /></button>
    </div>
    </>
  );
};

export default Card;
