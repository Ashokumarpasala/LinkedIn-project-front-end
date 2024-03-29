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
import JobSeekPage from './components/jobsComponent/JobSeekPage';
import "react-toastify/dist/ReactToastify.css";
import About from './components/footerComponents/About';
import PremimumPage from './components/homeComponent/PremimumPage';
import WriteArticlePage from './components/homeComponent/WriteArticlePage';
import AdditionalSeetingPage from './components/jobsComponent/AdditionalSeetingPage';
import SettingsAndPrivacyPage from './components/homeComponent/SettingsAndPrivacyPage';
import LetterPage from './components/networkComponent/LetterPage';

// import UserAuthenticationPage from './components/AuthenticationComponents/UserAuthenticationPage';

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

  const hastage = 'Hastage Following'
  

  // console.log(usersData);
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<UserAuthenticationPage />}/> */}
          <Route exact path='/' element={<Home users={users} />} />
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
          <Route exact path='/Job-seeker-guidance/jobs'  element={<JobSeekPage />} />
          <Route exact path='/about'  element={<About />} />
          <Route exact path='/premimum'  element={<PremimumPage />} />
          <Route exact path='/single-rimemum-myjob'  element={<Myjobs />} />
          <Route exact path='/write-article-page'  element={<WriteArticlePage />} />
          <Route exact path='/additonal-settings-page'  element={<AdditionalSeetingPage />} />
          <Route exact path='/privacy-&-settings-page'  element={<SettingsAndPrivacyPage />} />
          
            <Route exact path='/news-letter/hastag/network'  element={<LetterPage hastage={hastage} />} /> : 
            <Route exact path='/news-letter/network'  element={<LetterPage  />} /> 
            
          {/* <Route exact path='/single-user-profile/netword-page'  element={<SingleUserComponent />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
