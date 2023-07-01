//import { useEffect, useState, useQuery } from 'react';
import { useState } from 'react';
import Card from './characterCardComponent'
//import { useDispatch, useSelector } from 'react-redux';
//import { getCharacters } from '../redux/actions/getCharactersAction';
import axios from "axios";
import { useQuery } from '@tanstack/react-query';

const CharacterList = () => {
//   const dispatch = useDispatch();
//   const characters = useSelector((state) => state.charactersReducer.characters);

//   useEffect(() => {
//   dispatch(getCharacters());
//   }, [dispatch]);

/////////////////////////////////////////////////////////

  function createFavorites(){
    if (localStorage.getItem('Favorites')===null){
      localStorage.setItem('Favorites',[]);
    }}

  const BASE_URL = "https://rickandmortyapi.com/api/";
  
  async function placeholderAPI(page) {
    createFavorites();
    const response = await axios.get(`${BASE_URL}/character/?page=${page}`);
    return response.data;
  }
  const [page, setPage] = useState(1);

  const { data, isFetching, isError } = useQuery(["@characteres", page], () =>
    placeholderAPI(page)
  );

  if (isFetching) {
    return <h4>Carregando....</h4>;
  }

  if (isError) {
    return <h4>Erro ao buscar dados!</h4>;
  }
/////////////////////////////////////////////////////////////
    return (
      <>
      <button
        disabled={page < 2}
        onClick={() => setPage((previous) => previous - 1)}
      >
        Anterior
      </button>
      <button
        disabled={page > data.info.pages - 1}
        onClick={() => setPage((previous) => previous + 1)}
      >
        Seguinte
      </button>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {data.results.map((character) => (
            <div key={character.id}>
              <Card character={character} />
            </div>
          ))}
        </div>
        {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {(characters.results).map((character) => (
            <div key={character.id}>
              <Card character={character} />
            </div>
          ))}
        </div> */}
      </>
    );
  };
  
  export default CharacterList;