import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Jobs from './components/Jobs'
import Home from './components/Home'
import Network from './components/Network'
import Notifications from './components/Notifications'
import Messages from './components/Messages'
import MainProfile from './components/profileComponents/MainProfile';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/profileComponents/profileComp.css'
import './networkmedia.css'
import './components/jobsComponent/jobsMedia.css'
import Connections from './components/networkComponent/Connections';
import FollowersPage from './components/networkComponent/FollowersPage';
import GroupsPage from './components/networkComponent/GroupsPage';
import EventsPage from './components/networkComponent/EventsPage';
import Pages from './components/networkComponent/Pages';
import './homeMedia.css'
import axios from 'axios'
import DiscoverGroups from './components/networkComponent/DiscoverGroups';
import Myjobs from './components/jobsComponent/Myjobs';
import InterviewPrepComp from './components/jobsComponent/InterviewPrepComp';
import SingleUserComponent from './components/networkComponent/SingleUserComponent';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import UserAuthenticationPage from './components/AuthenticationComponents/UserAuthenticationPage';

function App() {
  const [usersData, setUsersData] = useState([]);
  const [users, setUsers] = useState([]);
  // console.log(users)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users');
        setUsersData(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(usersData);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<UserAuthenticationPage />}/>
          <Route exact path='/home' element={<Home users={users} />} />
          <Route exact path='/network' element={<Network usersData={usersData} />} />
          <Route exact path='/jobs' element={<Jobs />} />
          <Route exact path='/messages' element={<Messages />} />
          <Route exact path='/notifications' element={<Notifications />} />
          <Route exact path='/MainProfile'  element={<MainProfile users={users} />} />
          <Route exact path='/connections/network'  element={<Connections usersData={usersData} />} />
          <Route exact path='/Followerspage/network'  element={<FollowersPage usersData={usersData} />} />
          <Route exact path='/groups/network'  element={<GroupsPage />} />
          <Route exact path='/events/network'  element={<EventsPage />} />
          <Route exact path='/pages/network'  element={<Pages />} />
          <Route exact path='/discoverGropus/network'  element={<DiscoverGroups />} />
          <Route exact path='/myjobs/jobs'  element={<Myjobs />} />
          <Route exact path='/interview-preparation/jobs'  element={<InterviewPrepComp />} />
          {/* <Route exact path='/single-user-profile/netword-page'  element={<SingleUserComponent />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
