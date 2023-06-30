import { useEffect } from 'react';
import Card from './characterCardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../redux/actions/getCharactersAction';

const CharacterList = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.charactersReducer.characters);

  useEffect(() => {
  dispatch(getCharacters(1));
  }, [dispatch]);

    
    return (
      <>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {characters.map((character) => (
            <div key={character.id}>
              <Card character={character} />
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default CharacterList;