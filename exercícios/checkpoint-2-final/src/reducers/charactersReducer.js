const initialState = {
    characters:[],
    error: null
  };
  
  export const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_CHARACTERS_SUCCESS": 
        return{
          ...state,
          characters: action.payload
              };
      case "GET_CHARACTERS_ERROR": 
        return{
          error: alert('Erro ao buscar personagens!')
              }
      default:
        return state;
    }
  };
  