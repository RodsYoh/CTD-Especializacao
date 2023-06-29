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

  const { results } = useSelector<RootState, State>(
    (store) => store.charactersReducer
  );
  console.log(results);
  useEffect(() => {
    dispatch({ type: "GET_CHARACTERS" });
  }, [dispatch]);

  function renderEmpty() {
    if (results.length < 1) {
      return <p>Nenhum personagem encontrado.</p>;
    }
  }

  return (
    <>
      <h2>Hello</h2>
      {renderEmpty()}
      {results.map((character) => (
        <h5>{character.name}</h5>
      ))}
      <hr />
      <HeaderComponent />
      <HomePage />
      <CharacterList />
    </>
  );
}

export default App;
