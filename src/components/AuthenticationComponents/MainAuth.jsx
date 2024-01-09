import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import Home from '../Home';
import UserAuthenticationPage from './UserAuthenticationPage';
function MainAuth() {
    console.log('auth',auth);
    const [currentUser, setCurrentUser] = useState(null)
  
    useEffect(() => {
     onAuthStateChanged(auth, (user) => {
      user ? setCurrentUser({
        uid:user.uid,
        email:user.email, 
      }) : setCurrentUser(null)
     })
    }, [])
  return (
    <div>
       <center>
       {currentUser ? <Home />: <UserAuthenticationPage />}
    </center>
    </div>
  )
}

export default MainAuth
