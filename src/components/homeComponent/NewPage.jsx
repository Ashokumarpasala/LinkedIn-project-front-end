import React, { useState } from 'react'
import NavBar from '../NavBar'
import leftArryData from './NewsData'
import Footer from '../../Footer'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";


function NewPage({newsId, setnewspageShow, newspageShow, setNewsId}) {
    const newsArry =  leftArryData[newsId - 1]
    // console.log( leftArryData[mainpageID - 1])

    const [showAll, setShowAll] = useState(false);
    // const [mainpageID, setmainpageID] = useState(newsId);
    // console.log(mainpageID)

    const showToastMessage = () => {
      toast.success(`News changed Succesfully`, {
        position: toast.POSITION.TOP_CENTER,
      });
    };

  return (
    <>
    <div className='toast-container'>
      <ToastContainer />
    </div>
    <div>
      <NavBar />
      <div className="container-xl mx-auto newspage">

      <div class="row">
            <div class="col-9">
                <div className="card border">
                 <img className='' style={{height:"700px", height:"500px", objectFit:"cover"}} src={newsArry.mainImage} alt="" />
                 <div className="border inside rounded-5 m-5 p-3" style={{backgroundColor:"#edf3f8", position:"relative", top:"-150px"}}>
                    <div className="d-flex main justify-content-between">
                        <h3 className='fw-bold w-50'>{newsArry.headline}</h3>
                        <div className='d-flex align-items-start'>
                        <button className='btn btn-primary  rounded-pill'>share</button>
                        <button className='btn btn-primary mx-2 rounded-pill' onClick={() => setnewspageShow(!newspageShow)}><i class="bi bi-arrow-90deg-right"></i>go back</button>
                        </div>
                    </div>
                    <div>
                        <p><Link>{newsArry.source}, {newsArry.category} Editor at {newsArry.relatedArticles[0].headline}</Link></p>
                        <p>{newsArry.time}</p>
                    </div>
                    <p>{newsArry.description}</p>
                    <p>{newsArry.about}</p>
                 <div className="">
                  {
                    newsArry.relatedArticles.map((data) => {
                      return(<>
                        <div className='border bg-white my-2 p-3  rounded-5'>
                          <div className="d-flex main justify-content-between align-items-start">

                          <div className="d-flex main">
                            <img src={data.channelImage} className='rounded-4 image' style={{width:"125px"}} alt="" />
                             <div className='mx-3'>
                              <div className='fs-5 fw-bold'>{data.source}</div>
                              <div>{data.headline}</div>
                              <div>{newsArry.time}</div>
                             </div>
                          </div>
                          <button className='btn btn-primary'>+ Follow</button>
                          </div>
                          <div className='p-3'>
                          <p className=''>{data.channelDescription}</p>
                          <p className=''>{newsArry.postExplanation}</p>
                          <p>Sources : <Link>{newsArry.postImages[0]}</Link></p>
                          </div>
                          <img src={data.image} className='img-fluid image' alt="" />
                          <div className='border-bottom  my-3'></div>
                          <div className="d-flex socialicons justify-content-around fs-5" >
                            <p >{newsArry.reactions.likes} <i class="mx-2 bi bi-hand-thumbs-up-fill"></i>Likes</p>
                            <p>{newsArry.reactions.comments}<i class="mx-2 bi bi-chat-text-fill"></i> comments</p>
                            <p>{newsArry.reactions.shares} <i class="mx-2 bi bi-share-fill"></i>shares</p>
                          </div>
                          <div className="d-flex addcomment p-3">

                          <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "70px",
                    
                  }}
                  alt="Avatar" />
              <input type="" className='form-control mx-3 rounded-5 p-3 rounded-pill'  placeholder='Add a comment' />
                  </div>
                        </div>
                       </>)
                    })
                  }
                 </div>
                 </div>
                </div>
            </div>
            <div class="col-3">
            <div className="card p-3 shadow border">
              <div className="d-flex justify-content-between fw-bold">
                <p>LinkedIn News</p>
                <h6> <span class="badge bg-dark">i</span></h6>
              </div>
              <div>
        {showAll ? (
          <div className=''>
          {

            leftArryData.map((data) => (
              <div  key={data.id} onClick={() => setNewsId(data.id)}  style={{cursor:"pointer"}} >
              <li className='fw-bold fs-6' onClick={showToastMessage}><Link>{data.headline}</Link></li>
              <p className='text-secondary mx-4' style={{fontSize:"14px"}}>{data.time}</p>
            </div>
          )
          )
        }
              <button onClick={() => setShowAll(!showAll)} className='btn btn-secondary'>
                Show less
              </button>
          </div>
        ) : (
          <>
            {leftArryData.slice(0, 4).map((data) => (
              <div  key={data.id} onClick={() => setNewsId(data.id)} style={{cursor:"pointer"}} >
              <li className='fw-bold fs-6' onClick={showToastMessage}><Link>{data.headline}</Link></li>
                <p className='text-secondary mx-4' style={{fontSize:"14px"}}>{data.time}</p>
              </div>
            ))}
            {leftArryData.length > 5 && (
              <button onClick={() => setShowAll(!showAll)} className='btn btn-secondary'>
                Show More
              </button>
            )}
          </>
        )}
      </div>
            </div>
            <div >
            <div className='card  p-4 text-center my-2 border'>
              <p>Get the latest jobs and industry news</p>
              <div className="d-flex align-self-center">

              <img className='' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "80px",}} alt="Avatar" />
              </div>
              <p>Ashok Kumar, explore relevant opportunities with Mavenir</p>
              <button className='btn btn-primary fw-bold'>Follow</button>
            </div>
            {/* .......footer......... */}
            <Footer />
            </div>
            </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default NewPage
