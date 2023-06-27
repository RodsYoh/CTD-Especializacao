import { Character } from "./characterTypes";
import fullStar from "./../images/fullStar.png";
const Card: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <>
      <div key={character.id}>
        <img src={character.image} width={100} alt={character.name} />
        <p>{character.name}</p>
        <img width={20} src={fullStar} alt="" />
        {/* <button>Favoritar</button> */}
      </div>
    </>
  );
};

export default Card;
