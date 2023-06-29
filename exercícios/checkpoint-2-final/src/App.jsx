import CharacterList from "./components/characterListComponent";
import HeaderComponent from "./components/headerComponent";
import HomePage from "./pages/homePage";

function App() {
  return (
    <>
      <HeaderComponent />
      <HomePage />
      <CharacterList />
    </>
  );
}

export default App;