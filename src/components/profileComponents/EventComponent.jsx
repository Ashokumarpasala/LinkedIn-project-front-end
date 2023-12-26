import React from 'react'
import { Link } from 'react-router-dom'
   
function EventComponent({eventComponent, seteventComponent}) {
  return (
    <div className='' style={{
        position:"fixed",
        top:"100px",
        left:"25%",
    }}>
      <div class="card p-3 " style={{height:"auto", width:"1000px"}}>
  <div class="card-header fw-bold d-flex justify-content-between">
    <h2>Create an event</h2>
    <button className='btn btn-primary px-3 ' onClick={() => seteventComponent(!eventComponent)}>close</button>
  </div>
  <div class="card-body">
      <form class="row g-3">
  <div class="col-12">
    <h5>Event Type</h5>
    <div class="form-check">
      <input class="form-check-input" type="radio" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        online
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        In-Person
      </label>
    </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">FirstName</label>
    <input type="text" class="form-control" id="" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">LastName</label>
    <input type="text" class="form-control" id="" />
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">start Date</label>
    <input type="date" class="form-control" id="" placeholder=""/>
  </div>
  <div class="col-6">
    <label for="inputAddress2" class="form-label">start Time</label>
    <input type="time" class="form-control" id="" placeholder="" />
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">End Date</label>
    <input type="date" class="form-control" id="" placeholder=""/>
  </div>
  <div class="col-6">
    <label for="inputAddress2" class="form-label">End Time</label>
    <input type="time" class="form-control" id="" placeholder="" />
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Description</label>
    <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
  <label for="floatingTextarea2">Ex : topics, shedules etc</label>
</div> 
 </div>
  
 
      </form>
      <p className='mt-4'>By continuing, you agree with  <Link>LinkedIn’s event policy.</Link> </p>
    
  </div>
  <div class="card-footer text-body-secondary d-flex justify-content-end">
    <button className='btn btn-primary px-3 '>next</button>
  </div>
</div>

    </div>
  )
}

export default EventComponent
