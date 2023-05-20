import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Product from "./product";
import NotFound from "./not-found";

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}