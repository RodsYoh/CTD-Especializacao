import { useEffect } from 'react';
import Card from './characterCardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../api';

const CharacterList = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.charactersReducer.characters);

  useEffect(() => {
  dispatch(getCharacters(1));
  }, [dispatch]);
    console.log(characters)

    // const [characters, setCharacters] = useState ([]);
  
    // useEffect(() => {
    //   const fetchCharacters = async () => {
    //     try {
    //       const response = await axios.get('https://rickandmortyapi.com/api/character');
    //       setCharacters(response.data.results);
    //     } catch (error) {
    //       console.error('Erro ao buscar personagens:', error);
    //     }
    //   };
  
    //   fetchCharacters();
    // }, []);
  
    return (
      <>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {characters.results.map((character) => (
            <div key={character.id}>
              <Card character={character} />
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default CharacterList;
  