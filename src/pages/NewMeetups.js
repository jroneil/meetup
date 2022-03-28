import { useNavigate  } from 'react-router-dom';
import NewMeetupForm from "../components/Meetups/NewMeetupForm";

function NewMeetUpsPage() {
    const history=useNavigate ();
    function addMeetupHandler(meetupData) {
        //todo
        //post reques
        fetch('url',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=>{
            history.replace("/");
        })
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}
export default NewMeetUpsPage;