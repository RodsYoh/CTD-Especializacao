
import fullStar from "../images/fullStar.png";
import emptyStar from "../images/emptyStar.png"

function FavoriteButton(data){
    const favorites = localStorage.getItem('Favorites');
    const pFavorites = JSON.parse(favorites);

    const characterID = data.id;
    const favorite = pFavorites.includes(characterID)||[];


    function addFavorite() {
        const newFavorites = [...pFavorites, characterID]
        localStorage.setItem('Favorites', JSON.stringify(newFavorites));
    }

    function deleteFavorite() {
        const newFavorites = pFavorites.filter((id) => id != characterID);
        localStorage.removeItem('Favorites', JSON.stringify(newFavorites));
    }

    const starImage = favorite ? fullStar : emptyStar;
    const buttonFunction = favorite ? deleteFavorite : addFavorite;
    
    return (
        <>
            <div>
                <button onClick={buttonFunction}>
                    <img src={starImage} width={15} />
                </button>
            </div>
        </>
    );
}

export default FavoriteButton;


