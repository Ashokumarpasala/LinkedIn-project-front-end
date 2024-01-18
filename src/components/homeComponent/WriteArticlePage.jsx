import React from 'react'
import NavBar from '../NavBar'

function WriteArticlePage() {
  return (
    <div>
        <NavBar />
        <div className='border-bottom writearticle border-3 py-3'>
            <div className="d-flex maindiv justify-content-between mt-5 pt-5 container-xl">
                <div className='d-flex userprofile align-items-end '>
                  <img style={{width:"50px"}} src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
                  <div className='mx-3 '>
                    <div className='fw-bold'>Ashok Kumar <i class="bi bi-caret-down-fill mx-2"></i></div>
                    <div>individual Articles</div>
                  </div>
                </div>
                <div className='d-flex toolbar align-items-center rounded-pill' style={{backgroundColor:"#f4f2ee"}}>
                 <div className='mx-4 fw-bold'>Style <i class="bi bi-caret-down-fill "></i> </div>
                 <div className='fs-4 mx-3 fw-bold'>B</div>
                 <div className='fs-4 mx-3 fw-bold'><span>{"{ }"}</span></div>
                 <div className='fs-4 mx-3 fw-bold'>__</div>
                 <div className='fs-4 mx-3 fw-bold'><i class="bi bi-list-ol"></i></div>
                 <div className='fs-4 mx-3 fw-bold'><i class="bi bi-list-task"></i></div>
                 <div className='fs-4 mx-3 fw-bold'><i class="bi bi-link-45deg"></i></div>
                 <div className='fs-4 mx-3 fw-bold'><span>{"</ >"}</span></div>
                 <div className='fs-4 mx-3 fw-bold'><i class="bi bi-image-fill"></i></div>
                </div>
                <div className='button'>
                    <button className='btn btn-outline-primary rounded-pill fw-bold mx-3'>manage <i class="bi bi-caret-down-fill mx-2"></i></button>
                    <button className='btn btn-primary rounded-pill '>next <i class="bi bi-arrow-right mx-2"></i></button>
                </div>
            </div>
        </div>
        <div className=' container-xl p-5  '>
         <div className=" d-flex  justify-content-center text-center " >
            <div className='uploadpart border rounded-4 w-75 p-5' style={{backgroundColor:"#f4f2ee"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYU1fZ1s9LpZZY9vNhjYYP7TTC5H92EGpCcQ&usqp=CAU" style={{width:"65px"}} alt="" />
                <p className='my-5'>We recommend uploading or dragging in an image that is 1920x1080 pixels</p>
                <button className='btn btn-outline-dark rounded-pill fw-bold'><i class="bi bi-upload mx-2"></i>upload from computer</button>
            </div>
         </div>
         <div className="container-xl my-2 text-center">
            <input type="text" placeholder='Title' className='form-control' style={{fontSize:"55px", border:"none"}}  /> <br />
            <input type="text" placeholder='Write here.You can aslo include @mentions.' className=' my-2 form-control' style={{fontSize:"25px", border:"none"}}  />
         </div>
        </div>
    </div>
  )
}

export default WriteArticlePage
