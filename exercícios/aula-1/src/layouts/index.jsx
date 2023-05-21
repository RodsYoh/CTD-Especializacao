import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/header";

export default function Layout({children}) {
  const navigate = useNavigate();

  let isLogged = false;

  if (!isLogged) {
    navigate("/login");
  }

  return (
    <div>
      <Header />
      <Outlet />
      <footer style={{ background: "purple" }}>
        Todos os direitos reservados
      </footer>
    </div>
  );
}