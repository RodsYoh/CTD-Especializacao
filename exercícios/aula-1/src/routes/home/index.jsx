import { useState, useEffect } from 'react';
import axios from "axios";
import Item from '../../components/Item/Item';
import './Home.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

export default function Home() {
    const { nome, cidade } = useContext(MyContext);
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
      <>
       <div>
       <h1>
        Hello World - Home {nome} - {cidade}
       </h1>
       </div>
      <ul className='itemList'>
        {itens.map(item => (
        <Link key={item.id} to={`./product/${item.id}`}>
                <Item
                    key={item.id}
                    thumbnail={item.thumbnail}
                    titulo={item.title}
                    marca={item.brand}
                    preco={item.price}
                />
        </Link>
        ))}
        </ul>
        </>
  );
}