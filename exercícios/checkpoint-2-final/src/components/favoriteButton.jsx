
import fullStar from "../images/fullStar.png";
import emptyStar from "../images/emptyStar.png"

function FavoriteButton(char){
    const favorites = localStorage.getItem('Favorites');

    const characterID = char.character.id;

    const favorite = favorites.includes(characterID)||[];

    function addFavorite() {
        const newFavorites = [...favorites, characterID]
        localStorage.setItem('Favorites', JSON.stringify(newFavorites));
    }

    function deleteFavorite(char) {
        const favorites = localStorage.getItem('Favorites');
        const characterID = char.character.id;
        const newFavorites = favorites.filter((id) => id != characterID);
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


