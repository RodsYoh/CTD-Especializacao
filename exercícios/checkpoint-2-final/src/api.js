import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character/?page=";

export const getCharacters = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}${page}`);
      dispatch({ type: "GET_CHARACTERS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_CHARACTERS_ERROR", payload: error.message });
    }
  };
};


// import { axios } from "axios";

// const BASE_URL = "https://rickandmortyapi.com/api/character/?page=";

// export default async function getCharacters(page) {
//   const response = await axios.get(`${BASE_URL}${page}`);

//   return response.data;
// }