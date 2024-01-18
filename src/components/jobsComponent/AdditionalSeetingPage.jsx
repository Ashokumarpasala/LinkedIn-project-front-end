import React from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'

function AdditionalSeetingPage() {
  return (
    <div>
        <NavBar />
      <div className='py-5 mt-5' style={{backgroundColor:"#f4f2ee", height:"100vh"}}>
            <div className="card p-3 container-xl mx-auto w-75">
              <div className=''><h4><Link to='/jobs'><i class="bi bi-arrow-left-square-fill mx-2"></i>Back</Link></h4></div>
            <h2 className='p-2'>Resumes and application data</h2>
            <div className='d-flex border-bottom border-2 p-3  justify-content-between'>
                <div>
                    <h5 className='fw-bold'>Save resumes and application data</h5>
                    <p className='w-75'>Allow LinkedIn to save your resumes and answers about your work experience and skills. You can always change your answers with each application. Learn more</p>
                </div>
                <div class="form-check form-switch">
                    <label class="form-check-label mx-2" for="flexSwitchCheckChecked">On</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                </div>
            </div>
            <div className='d-flex p-3 justify-content-between'>
                <div>
                    <h5 className='fw-bold'>Share resume data with recruiters</h5>
                    <p className='w-75'>Recruiters can view skills and experiences from your saved resumes when they search and view profiles. Learn more   </p>
                </div>
                <div class="form-check form-switch">
                    <label class="form-check-label mx-2" for="flexSwitchCheckChecked">On</label>
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                </div>
            </div>
            <div className='p-3'>
                <button className='btn btn-primary my-2'>Upload Resume</button>
                <p>DOC, DOCX, PDF (5MB)</p>
            </div>
            </div>
            <div>

            </div>
          </div>
    </div>
  )
}

export default AdditionalSeetingPage
