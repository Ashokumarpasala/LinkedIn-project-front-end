import React from 'react'
import { Link } from 'react-router-dom'

function PremimumPage() {
  return (
    <div className='trypremimum'>
      <div className=" p-3 border-bottom">
        <div className="container-xl nav d-flex justify-content-between align-items-end">

        <img style={{width:"50px"}} className='rounded-5' src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png" alt="" />
        <Link to='/'>
            <p>Back to LinkedIn.com</p>
        </Link>
        </div>
      </div>
      <div className='text-center p-5 border-bottom '>
        <h5 className='fs-4 fw-bold'>Learn from industry experts with real-world experience.</h5>
        <div className=' text-center '>
            <div className='p-3'>
            <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1397" className='rounded-circle' style={{width:"30px"}} alt="" />
            <img src="https://media.licdn.com/dms/image/C4E03AQEEZUPHzQoE0A/profile-displayphoto-shrink_400_400/0/1623677348445?e=2147483647&v=beta&t=4yBsLbVOvjpli7F64hdqdgYCNg6KkkCwqV8WIHW-YZA" className='rounded-circle' style={{width:"30px", position:"relative", right:"10px"}} alt="" />
            <img src="https://media.licdn.com/dms/image/C4E03AQG_Su1kC_uifw/profile-displayphoto-shrink_400_400/0/1655415134442?e=2147483647&v=beta&t=uPzys09P71IUfeaNnJmtyj2WRvvGBX1bYa3DhAtewWo" className='rounded-circle' style={{width:"30px", position:"relative", right:"20px"}} alt="" />
        <span>Millions of members use Premium Start your free 1-month trial today. Cancel anytime. We'll send you a reminder 7 days before your trial end</span>
            </div>
        </div>
      </div>

      <div className='' style={{backgroundColor:"#f4f2ee"}}>
        <div className="d-flex justify-content-around container-xl p-5">
        <div class="card border w-75 m-2">
            <div class="card-header p-4">
                <h2 class="card-title">Career</h2>
                <p class="card-text">Grow professionally and get ahead</p>
            </div>
            <div class="card-body">
                <ul>
                    <li className='p-2'>Access 21,000+ expert-led LinkedIn Learning courses</li>
                    <li className='p-2'>Contact people outside your network</li>
                    <li className='p-2'>See insights into company growth and hiring trends</li>
                </ul>
                <a href="#" class="btn btn-outline-primary rounded-pill w-100">Learn more</a>
            </div>
            </div>
            <div class="card border w-75 m-2">
            <div class="card-header p-4">
                <h2 class="card-title">Learning For Teams</h2>
                <p class="card-text">Upskill your team with LinkedIn Learning</p>
                Featured
            </div>
            <div class="card-body">
                <ul >
                    <li className='p-2'>Invite your team to learn new skills with multiple licenses</li>
                    <li className='p-2'>Access 21,000+ expert-led LinkedIn Learning courses</li>
                    <li className='p-2'>See insights on the skills your team is learning</li>
                </ul>
                <a href="#" class="btn btn-outline-primary rounded-pill w-100">Learn more</a>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PremimumPage
