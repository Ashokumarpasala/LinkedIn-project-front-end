import React from 'react'
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
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/network' element={<Network />} />
          <Route exact path='/jobs' element={<Jobs />} />
          <Route exact path='/messages' element={<Messages />} />
          <Route exact path='/notifications' element={<Notifications />} />
          <Route exact path='/MainProfile'  element={<MainProfile />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
