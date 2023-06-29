import fullStar from "../images/fullStar.png";

const Card = ({ character }) => {
  return (
    <div key={character.id}>
      <img src={character.image} width={100} alt={character.name} />
      <p>{character.name}</p>
      <img width={20} src={fullStar} alt="" />
      {/* <button>Favoritar</button> */}
    </div>
  );
};

export default Card;
