import React, { useState } from 'react'
import NavBar from './NavBar'
import softwarePrograms from './messageComponent/MessageData'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
function Messages() {
  const [selectedId, setselectedId] = useState(1)
  const [selectedTab, setSelectedTab] = useState('focused');

  // console.log(selectedId)
  const selectedMessengerData = softwarePrograms[selectedId -1] || softwarePrograms[0];
  // console.log(selectedMessengerData)
  const bgcolor = {
    backgroundColor: '#edf3f8',
    borderLeft:"10px solid green"
  }
  const handleClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className='mt-5'>
      <NavBar />
      <div class="row py-5 message container-xl mx-auto" >
        <div class="col-9 " >
          <div className="">
             <div class="row border rounded-4">
                <div class="col-5 border-end ">
                   <div className=' border-bottom'><h4 className='p-3'>Messaging</h4></div>
                   <input type="text" name="search"  className='fs-5 my-3 rounded-3 navbarinput navinput navbaronly w-100' placeholder="search" />

                   <div className='d-flex flex-wrap ' style={{ cursor: "pointer" }}>
                        <h4
                          className={`w-50 p-3 text-center ${selectedTab === 'focused' ? 'active text-success border-5' : ''}`}
                          onClick={() => handleClick('focused')}
                        >
                          Focused
                        </h4>
                        <h4
                          className={`w-50 text-center p-3 ${selectedTab === 'other' ? 'active text-success border-5' : ''}`}
                          onClick={() => handleClick('other')}
                        >
                          Other
                        </h4>
                      </div>
                    <div className='my-3'>
                    {selectedTab === 'focused' ? 
                      <>
                        {
                          softwarePrograms.map((data) => {
                            return (<>
                            {/* ...user active */}
                              <div style={selectedId === data.id ? bgcolor : {}} className={`d-flex p-2 `} key={data.id}  onClick={() => setselectedId(data.id)}>
                              <div><img className='rounded-circle' style={{width:"75px", height:"75px"}} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" alt="" /></div>
                              <div className='px-3 border-bottom p-2'>
                                <div className="d-flex justify-content-between">
                                  <h5 className='fw-bold'><Link>{data.messageSender}</Link></h5>
                                  <div>{data.messageDate}</div>
                                </div>
                                <div>{data.sponsoredBy}</div>
                                <div>{data.programName}</div>
                              </div>
                              </div>
                            </>)
                          })
                        }

                      </>   : <>
                        <div className='text-center p-5'>
                          <img className='img-fluid w-100' src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-web-design_516790-900.jpg?w=2000" alt="" />
                          <h2 className='fw-bold'>No Messages Yet</h2>
                          <p>Reach out and start a conversation to advance your career</p>
                          <button className='btn btn-primary rounded-pill fw-bold fs-6'>send a message</button>
                        </div>
                      </>
                  }
                    </div>
                   </div>
                  <div class="col-7 fs-5 ">
                    <div className='border-bottom p-3'>


                    <h5 className="border-bottom fw-bold p-3">
                      {selectedMessengerData.companyName} - {selectedMessengerData.messageSubject} 
                    </h5>
                    <div className='d-flex justify-content-between p-3 bg-light'>
                      <div>Sponsred By</div>
                      <div>{selectedMessengerData.messageDate}</div>
                    </div>
                    <h5 className='p-2'>
                      {selectedMessengerData.programName}-{selectedMessengerData.sponsoredBy}</h5>
                      <button className='btn m-2 btn-primary rounded-pill fs-6'>Download Brocher</button>
                    </div>
                    <div className="d-flex my-3">
                    <div><img className='rounded-circle mx-2' style={{width:"50px", height:"50px"}} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" alt="" /></div>
                    <div>
                      <p>{selectedMessengerData.companyName} - {selectedMessengerData.messageSubject} </p>
                      <p>Hi Ashok,</p>
                      <p>{selectedMessengerData.whyThisProgram}</p>
                      <p>{selectedMessengerData.advantages}</p>
                      <p>Duration of Program : {selectedMessengerData.duration}</p>
                      <p>Certification of Program : {selectedMessengerData.programDegree}</p>
                      <p>{selectedMessengerData.programDescription}</p>
                      <p>{selectedMessengerData.sponsoredCompanyDescription}</p>
                      <p>programHighlights : {selectedMessengerData.programHighlights.map((data) => <><li className='px-4'>{data}</li></>)}</p>
                      <p>skillsLearned : {selectedMessengerData.skillsLearned.map((data) => <><li className='px-4'>{data}</li></>)}</p>
                      <p>{selectedMessengerData.importance}</p>
                      <div className="web">
                        <p className=''>Time to Register the Program : <Link className=''> {selectedMessengerData.programWebsite}</Link></p>
                      </div>
                      <p>Location Of Program : {selectedMessengerData.programLocation}</p>
                        <p>Regards,</p>
                        <p>{selectedMessengerData.sponsoredBy} - {selectedMessengerData.messageSender}</p>
                    </div>
                    </div>

                  </div>
                </div>
            </div>
           </div>
        <div class="col-3">
          <img className='img-fluid rounded-5' src="https://img.jagranjosh.com/images/2022/February/222022/Top-10-most-valuable-companies-in-the-world.jpg" alt="" />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Messages



