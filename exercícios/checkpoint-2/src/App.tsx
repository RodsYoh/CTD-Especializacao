import { useSelector } from "react-redux";
import CharacterList from "./components/characterListComponent";
import HeaderComponent from "./components/headerComponent";
import HomePage from "./pages/homePage";
import { RootState } from "./redux/store";
import { State } from "./redux/reducers/characters-reducer/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

  const { characters } = useSelector<RootState, State>(store=>store.characterReducer);
  console.log(characters)
  useEffect(()=>{
    dispatch({type: "GET_CHARACTER"});
  },[dispatch]);

  function renderEmpty(){
    if(characters.length<1){
      return <p>Nenhum personagem encontrado.</p>
    }
  }

  return (
    <>
      <h2>Hello</h2>
      {renderEmpty()}
      {characters.map((character)=>
      <h5>{character.name}</h5>
      )
      }
      <hr />
      <HeaderComponent />
      <HomePage />
      <CharacterList />
    </>
  );
}

export default App;
