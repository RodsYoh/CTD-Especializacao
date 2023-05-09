import "getItens()" from './../App.jsx';

export default function Item(props) {
    return (
      <div>
        <h2>{props.thumbnail}</h2>
        <p>{props.descricao}</p>
      </div>
    );
  }