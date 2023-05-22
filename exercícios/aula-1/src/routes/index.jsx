import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Product from "./product";
import NotFound from "./not-found";
import MyProvider from "../contexts/MyContext";
import Layout from "../layouts";
import Login from "./login";

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <MyProvider>    
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>  
      </MyProvider>
    </BrowserRouter> 
  );
}