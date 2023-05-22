import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/header";
import { useEffect } from "react";

export default function Layout({children}) {
  const navigate = useNavigate();

  useEffect(() => {
    let isLogged = localStorage.getItem("@user_email");

    if (isLogged === undefined) {
      navigate("/login");
    }
  }, []);

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