import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css'
import Item from './components/Item';

function App() {
  const [itens, setItens] = useState([]);
  
  useEffect(() => {
    getItens();
  }, []);
  async function getItens() {
    const response = await axios.get(
      "https://dummyjson.com/products"
    );

    console.log(response);

    setItens(response.data);
  }
  return (
    <>
        {itens.map((item) => (
        <Item 
          key={item.id}
          thumbnail={item.thumbnail}
          titulo={item.titulo}
          marca={item.brand}
          preco={item.price}
          >{JSON.stringify(item)}</Item>
      ))}
    </>
  )
}

export default App
