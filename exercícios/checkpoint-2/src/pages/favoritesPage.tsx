const FavoritesPage = () => {
    return (
      <div className="paginacao">
        <button disabled={true} className={"primary"}>
          Anterior
        </button>
        <button disabled={false} className={"primary"}>
          Próximo
        </button>
      </div>
    );
  };
  
  export default FavoritesPage;