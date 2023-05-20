import './Item.scss';
 
 export default function Item({titulo, thumbnail, marca, preco}) {

    return (
       <>
       <div className='itemCard'>
         <p>
           {titulo}
         </p>
         <img src={thumbnail} className="thumbnail"></img>
         <p>
           {marca}
         </p>
         <p>
           {preco}
         </p>
      </div>
       </>
     );
   }