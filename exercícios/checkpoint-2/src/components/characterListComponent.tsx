import React, { useEffect, useState } from "react";
import axios from "axios";
import { Character } from "./characterTypes";
import Card from "./characterCardComponent";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
      }
    };

    fetchCharacters();
  }, []);

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
