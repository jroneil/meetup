import {useContext} from 'react';
import MeetupList from '../components/Meetups/MeetupList';
import FavoritiesContext from '../components/store/Favorities-context';

function Favorities(){
    const favoritiesCtx = useContext(FavoritiesContext)
    let content;
    if(favoritiesCtx.totalFavorities==0){
        content=<p>You have no Favorities yet.Start adding some? </p>
    }else{
        content= <MeetupList meetup={favoritiesCtx.favorities}/>
    }
    return(
        <section>
            <h1>
                {content}
            </h1>
            </section>
    )
}
export default Favorities;