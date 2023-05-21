import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes";
import Layout from "./layouts";
import MyProvider from "./contexts/MyContext";

export default function App() {
  return (
    <BrowserRouter>
      <MyProvider>
          <RoutesConfig />;
      </MyProvider>
    </BrowserRouter>
  )
}
