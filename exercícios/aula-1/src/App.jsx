import { useState, useEffect } from 'react';
import axios from "axios";
import Item from './components/Item/Item';
import './App.scss';

function App() {
  const [itens, setItens] = useState([]);
  
  useEffect(() => {
    getItens();
  }, []);

  const getItens = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products`);
      setItens(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <ul className='itemList'>
        {itens.map(item => (
          <Item
            key={item.id}
            thumbnail={item.thumbnail}
            titulo={item.title}
            marca={item.brand}
            preco={item.price}
          />
            ))
          }
      </ul>     
        )
}

export default App
