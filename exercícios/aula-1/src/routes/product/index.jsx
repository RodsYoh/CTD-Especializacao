import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`);
  }, []);

  return (
    <>
    <div>
      <h1>Hello Product - {params.id}</h1>
    </div>
    </>
  );
}

/* SHIFT + ALT + A 
  export default function Product() {
  return (
    <div>
      <h1>Hello World - Product</h1>
    </div>
  );
} */