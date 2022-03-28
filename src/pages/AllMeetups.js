import MeetupList from "../components/Meetups/MeetupList";
import { useState,useEffect } from "react";
const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];
function AllMeetUps(){
    const [isloading,setIsLoading]=useState(true);
    const [loadedMeetups,SetLoadedMeetUps]=useState([]);
    useEffect(()=>{
        setIsLoading(true)
        fetch(' same firebase url'
        ).then(response=>{
        return response.json()
        }).then(data=>{
            //for firebase
            const meetups=[];
            for (const key in data){
                const meetup={
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            SetLoadedMeetUps(meetups);
        });
    },[]);
    // todo GET
  
    if(isloading){
        return(
            <section>
                <p>Loading.....</p>
            </section>
        )
    }
    return(
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
            </section>
        
    )
}
export default AllMeetUps;