import {Route ,Routes} from 'react-router-dom';
import AllMeetUps from './pages/AllMeetups';
import NewMeetUpsPage from './pages/NewMeetups';
import Favorities from './pages/Favorites';

import Layout from './components/layout/Layout.js';


function App() {
  return (
    <Layout >
      <Routes>
      <Route path='/' element={<AllMeetUps />} />
      <Route path='/new-meetup' element={<NewMeetUpsPage />} />  
      <Route path='/favorities' element={<Favorities />} />
       </Routes>
    </Layout>
  );
}

export default App;
