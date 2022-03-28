import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritiesContext from '../store/Favorities-context';
function MeetupItem(props){
    const favoritiesCtx=useContext(FavoritiesContext);
    const itemFavorite=favoritiesCtx.isItemFavorite(props.id);

    function toggleFavoritiesStatusHandler(){
       if(itemFavorite){
           favoritiesCtx.removeFavorite(props.id);
       }else{
           favoritiesCtx.addFavorite({
               id:props.id,
               title:props.title,
               description:props.description,
               image:props.image,
               address:props.address
           });
       }
    }
    return (
        <li  className={classes.item}>
            <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.action}>
            <button onClick={toggleFavoritiesStatusHandler}> 
            {itemFavorite ? 'Remove Item from Favorities':'Add Item to Favorities'}</button>
        </div>
        </Card>
        </li>
    )

}
export default MeetupItem;