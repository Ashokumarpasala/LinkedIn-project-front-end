import React, { useState } from 'react'
import NavBar from '../NavBar'
  

function FollowersPage() {
    const [activeTab, setActiveTab] = useState('following');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div className='mt-5 pt-4' style={{backgroundColor:"#f4f2ee"}}>
      <NavBar />
      <div class="row follow container-xl mx-auto pt-4">
            <div class="col-9">
                <div className="card p-3">
                    <h6>Ashok Kumar's Network</h6> <hr />
                    <div>
            <div className='d-flex flex-wrap border-bottom'>
                <h6
                    className={`cursor-pointer ${activeTab === 'following' ? 'border-bottom border-success p-2 border-5' : 'p-2'}`}
                    onClick={() => handleTabChange('following')}
                >
                    Following
                </h6>
                <h6
                    className={`mx-5 cursor-pointer ${activeTab === 'followers' ? 'border-bottom border-success p-2 border-5' : 'p-2'}`}
                    onClick={() => handleTabChange('followers')}
                >
                    Followers
                </h6>
            </div>

                    <div className='mt-3'>
                     <p>You are following 1 people out of your network</p>
                    </div>
            {/* Content based on activeTab */}
            {activeTab === 'following' && (
                <div>
                    <h1>Following Tab</h1>
                    {/* Content for Following */}
                    {/* ... */}
                </div>
            )}

            {activeTab === 'followers' && (
                <div>
                                        <h1>Followers Tab</h1>
                    {/* Content for Followers */}
                    {/* ... */}
                </div>
            )}
        </div>
                </div>
               
            </div>
            <div class="col-3">
            <div className="card p-3 text-center ">
            <p>Get the latest jobs and industry news</p>
            <div className="d-flex align-self-center">

            <img className='' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
            </div>
            <p>Ashok Kumar, explore relevant opportunities with Mavenir</p>
            <button className='btn btn-primary fw-bold'>Follow</button>
          </div>
            </div>
        </div>
    </div>
  )
}

export default FollowersPage;
