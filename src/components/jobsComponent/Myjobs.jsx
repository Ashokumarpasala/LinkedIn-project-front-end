import React from 'react'
import companies from './RecomdedJobsData'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import Footer from '../../Footer';
   
function Myjobs() {
    const interviewQuestions = [
        {
          question: 'What is the significance of RESTful API in web development?',
          answer: 'RESTful API (Representational State Transfer) is a standard architectural style for designing networked applications. It relies on a stateless communication between client and server, making it scalable and suitable for distributed systems. RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE) for communication and are commonly employed in web development to facilitate interoperability between different systems.',
        },
        {
          question: 'Explain the differences between var, let, and const in JavaScript.',
          answer: 'In JavaScript, var, let, and const are used to declare variables. The main differences are in their scope and mutability. var has function scope, let has block scope, and const also has block scope but cannot be reassigned after initialization. Variables declared with var are hoisted to the top of their scope, which may lead to unexpected behavior. let and const, introduced in ECMAScript 6, provide more predictable scoping and prevent accidental reassignments.',
        },
        {
          question: 'What is the significance of version control, and which version control systems have you used?',
          answer: 'Version control is crucial in software development for tracking changes, collaborating with team members, and maintaining code history. It helps manage codebase versions, rollback changes, and merge contributions seamlessly. Some commonly used version control systems include Git, Mercurial, and SVN. Git is widely adopted due to its distributed nature, branching capabilities, and compatibility with platforms like GitHub and GitLab.',
        },
      ];
      
      
  return (
    <div style={{backgroundColor:"#f4f2ee"}} className='py-5'>
        <NavBar />
        <div class="row myjobspage container-xl mx-auto pt-5" >
            <div class="col-3 ">
             <div className="card border ">
                <div className='p-3 '>
                <i class="bi bi-bookmark-fill"></i> {' '}
                My items
                </div>
                <div className="border">

                <div className=" p-3  d-flex justify-content-between border-start border-primary border-5">
                    <div>My Jobs</div>
                    <div>25</div>
                </div>
                </div>
             </div>
             <Footer />
            </div>
            <div class="col-6">
              <div className="card border">
                <div className="border-bottom p-3">

                <div className='w-25'>

                <h4>My Jobs</h4>
                <button className='btn btn-success fw-bold rounded-pill'>Applied</button>
                </div>
              </div>
                <div className='border-bottom'>
                    {companies.slice(0, 8).map((data) => {
                        return(<>
                         <div className='d-flex p-2'>
                            <div>

                                <img style={{width:"100px"}} src="https://img.freepik.com/premium-vector/creative-letter-s-logotype-abstract-hexagon-with-pixel-technology-logo-design-creative-dynamic-round-logotype-connection-symbol-design_144543-1685.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704412800&semt=ais" alt="" />
                            </div>
                            <div className='d-flex justify-content-between border-bottom  w-100'>
                                 <div style={{fontSize:"12px"}} className='p-2'>
                                    <h6 className='fw-bold'><Link>{data.position}</Link></h6>
                                    <div>{data.name}</div>
                                    <div>{data.location}</div>
                                 </div>

                            <div>
                            <i class="bi bi-three-dots p-3 my-3"></i>
                            </div>
                            </div>

                         </div>
                        </>)
                    })}
                </div>
                <div className='p-3'>
                    <div className='d-flex justify-content-between'>
                        <div>
                        <i class="bi bi-caret-left-fill"></i> previous
                        </div>
                        <div>
                            <span className='mx-3 active'>1</span>
                            <span className='mx-3'>2</span>
                            <span className='mx-3'>3</span>
                            
                        </div>
                        <div>
                        next <i class="bi bi-caret-right-fill"></i>
                        </div>
                    </div>

                </div>

                </div>
            </div>
            <div class="col-3">
            <div className="card p-3  border">
                <div>Ashok Kumar, learn what hiring managers look for in answers to top interview questions</div>
                <div className='my-3'>
                    {interviewQuestions.map((data) => {
                        return(<>
                         <div className='d-flex mt-3 h-25 align-items-start' style={{fontSize:"12px"}}>
                            <img style={{width:"100px", objectFit:"contain"}} src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,c_pad,q_auto,f_auto/v1704349419/1704349419_351x351.jpg" alt="" />
                              <div className='border-bottom p-1'>{data.question}</div>
                         </div>
                        </>)
                    })}
                <div className='text-center mt-3'>
                  <Link to='/interview-preparation/jobs'>See all question</Link>
                  </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Myjobs
