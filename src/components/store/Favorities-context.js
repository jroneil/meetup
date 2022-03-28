import { createContext,useState } from "react";
import Favorities from "../../pages/Favorites";

const FavoritiesContext = createContext({
    favorities: [],
    totalFavorities: 0,
    addFavorite : (FavoriteMeetup)=>{},
    removeFavorite : (meetupId)=>{},
    isItemFavorite : (meetupId)=>{},
});

export function FavoritiesContextProvider(props) {
    const [userFavorities, setUserFavorities] = useState([])
    function addFavoriteHandler(FavoriteMeetup) {
        setUserFavorities((previousUserFavorities) => {
            return previousUserFavorities.concat(FavoriteMeetup);
        });

    }
    function removeFavoriteHandler(meetupId) {
        setUserFavorities((previousUserFavorities) => {
            return previousUserFavorities.filter(meetup => meetupId != meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorities.some(meetup => meetupId === meetupId);
    }
    const context = {
        favorities: userFavorities,
        totalFavorities: userFavorities.length,
        addFavorite: addFavoriteHandler,
        rmoveFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,

    };
    return (
        <FavoritiesContext.Provider value={[context]}>
            {props.children}
        </FavoritiesContext.Provider>
    )
}
export default FavoritiesContext;