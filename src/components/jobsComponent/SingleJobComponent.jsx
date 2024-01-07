    import React from 'react'
    import compaines from './RecomdedJobsData'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
    function SingleJobComponent({singlejob, setsinglejob, handleId, selectedId}) {
        const jobData =  compaines[selectedId - 1]
      return (
        <div className='pt-5 container-xl mx-auto'>
            <div className=' d-flex justify-content-end'>
                <button className='btn btn-success ' onClick={() => setsinglejob(!singlejob)}>back to Jobs</button>
            </div>
            <div class="row py-3 pb-5" >
                <div class="col-4">
                    <div className="card rounded-4" style={{height:"85vh"}}>
                    <div className='bg-primary px-4  py-4 text-white fw-bold fs-5'>
                        <h4>Jobs based on your profile</h4>
                        <p>24 results</p>
                    </div>
                    <div className='my-3' style={{overflowY:"scroll"}}>
                    {compaines.slice(0, 10).map((data) => {
                        return(<>
                        <div className=" rounded-4 d-flex justify-content-between  m-1 p-2" key={data.name} onClick={() => handleId(data.id)}>
                        <div className='d-flex'>

                        <img style={{width:"70px"}} src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/11/09183937/denside-logo-design-d-letter-logo-concept-by-abdul-gaffar-dribbble.png" alt="" />
                        <div className='mx-3' style={{fontSize:"12px"}}>
        
                        <h6 className='fw-bold'>
                            <Link >
                            
                            {data.position}
                            </Link>
                            </h6>
                        <div><i class="bi bi-buildings-fill mx-2"></i>{data.name}</div>
                        <div><i class="bi bi-person-workspace mx-2"></i>{data.location}</div>
                        </div>
                        </div>
                        <div>
                        <i class="bi bi-x-lg"></i>
                        </div>
                        </div> <hr />
                        </>)
                    })}
                    <nav aria-label="...">
                        <ul class="pagination pagination-lg d-flex justify-content-center">
                            <li class="page-item active" aria-current="page">
                            <span class="page-link">1</span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                        </ul>
                        </nav> <hr />
                    <Footer />
                    </div>
                 </div>
                </div>
                <div class="col-8">
                 <div className="card p-3 py-4"style={{height:"85vh", overflowY:"scroll"}}>
                    <div className='d-flex justify-content-between'>
                        <h3 className='fw-bold'>{jobData.position}</h3>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="mx-4 bi bi-arrow-90deg-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z"/>
                            </svg>
                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                            </svg>
                        </div>
                    </div>
                    <div>{jobData.name}-{jobData.offices[0].city}, {jobData.offices[0].country} 1 week ago - {jobData.foundedYear}</div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-suitcase-lg-fill" viewBox="0 0 16 16">
                        <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z"/>
                        </svg>
                        <button className='btn btn-secondary btn-sm mx-2'>Remote</button>{'- '}
                        <button className='btn btn-secondary btn-sm'>Full-time</button>
                    </div>
                    <p>{jobData.employees}-250 Empolyees</p>
                    <p>{jobData.founders[0]} is hiring for this job</p>
                    <p>{jobData.aboutValues.map((data) => <><div className='d-flex'>{data}, is skills match your profile - you may be a good fit</div></>)}</p>
                    <p>Job poster joined LinkedIn in {jobData.foundedYear}</p>
                    <div>
                        <button className='btn btn-primary rounded-pill'><i class="bi bi-linkedin mx-2"></i>Easy Apply</button>
                        <button className='btn btn-otline-primary rounded-pill'>Save</button>
                    </div>
                    {/* about............... */}
                    <div>
                        <h4>About the job</h4>
                        <p>{jobData.name} as a {jobData.position} JD</p>
                        <p>{jobData.about}</p>
                        <p>Are you passionate about bringing concepts to real life? </p>
                        <p>{jobData.aboutCulture}</p>
                        <p className='d-flex'>{jobData.aboutValues.map((data) => <><div>{data } { ' ,  '} </div></>)}</p>
                        <p className='d-flex'>{jobData.aboutPerks.map((data) => <><div>{data} { " , " } </div></>)}</p>
                    </div>
                    <div>
                        <div>

                        <h4>Roles & Resposibilites</h4>
                        <p>{jobData.responsibilities.map((data) => <><li>{data}.</li></>)}</p>
                        <h4>Qualifications & Requirements</h4>
                        <p>{jobData.qualifications.map((data) => <><li>{data}.</li></>)}</p>
                        <p>{jobData.technologiesUsed.map((data) => <><li>{data}.</li></>)}</p>
                        </div>
                    </div>
                    <div className='border rounded-4 p-3'>
                        <h4 className='fw-bold'>About the Company</h4>
                        <p>Company Name : {jobData.name}</p>
                        <p>{jobData.employees} Employees & {jobData.companySize} scale Industry</p>
                        <p>Company Website : {jobData.website}</p>
                        <p>Company E-mail : {jobData.contactEmail}</p>
                        <h4 className=''>Projects</h4>
                        <ol className='border-bottom'>{jobData.projects.map((data) => <><div><li>{data}</li></div></>)}</ol>
                        <h4>Our Parterns</h4>
                        <p className='border-bottom'>{jobData.partnerships.map((data) => <><li>{data}</li></>)}</p>
                        <h4>Achivements and Awards</h4>
                        <p>
                        <div>{jobData.awards.map((data) => <><li>{data}</li></>)}</div>
                        <div>{jobData.achievements.map((data) => <><li>{data}</li></>)}</div>
                        </p>
                        <p>{jobData.about}</p>

                    </div>
                    
                 </div>
                </div>
            </div>
        </div>
      )
    }
    
    export default SingleJobComponent
    