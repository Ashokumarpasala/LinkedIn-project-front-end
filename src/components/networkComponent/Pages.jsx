import React, { useState } from 'react';
import NavBar from '../NavBar';
import Footer from '../../Footer';
import itCompanies from './ItCompaniesData';
import SingleCompanyComponent from './SingleCompanyComponent';

function Pages() {
  const [selectedId, setSelectedId] = useState(null);
  const [showSingleCompanyComp, setShowSingleComp] = useState(true);

  const handleID = (id) => {
    setSelectedId(id);
    setShowSingleComp(!showSingleCompanyComp);
  };

  return (
    <div className='mt-5 pt-4' style={{ backgroundColor: "#f4f2ee" }}>
      <NavBar />

      {showSingleCompanyComp ? (
        <div className='row page container-xl mx-auto pt-5 py-5'>
          <div className="col-9">
            <div className="card p-3 shadow border">
              <div className="p-3">
                <h5 className='border-bottom py-3'>Pages</h5>
                {itCompanies.map((data) => (
                  <div className='d-flex justify-content-between my-3 border-bottom p-2' key={data.id} onClick={() => handleID(data.id)}>
                    <div className='d-flex pageCard lh-base' style={{ cursor: "pointer" }}>
                      <img className='mx-1' style={{ width: "80px", height: "50px" }} src="https://www.closingthegap.com/wp-content/uploads/2020/05/generic-logo.png" alt="image" />
                      <div>
                        <h5 className='fw-bold'>{data.name}</h5>
                        <div className='text-secondary'>{data.followers}</div>
                      </div>
                    </div>
                    <div>
                      <button className='btn btn-outline-secondary rounded-pill'>Following</button>
                    </div>
                  </div>
                ))}
              </div>
              {/* .......pages mapping code here......... */}
            </div>
          </div>
          <div className="col-3">
            <div className="card p-3 text-center ">
              <p>Get the latest jobs and industry news</p>
              <div className="d-flex align-self-center">
                <img className='' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{ width: "80px" }} alt="Avatar" />
              </div>
              <p>Ashok Kumar, explore relevant opportunities with Mavenir</p>
              <button className='btn btn-primary fw-bold'>Follow</button>
            </div>
            <div className=" mt-3 p-2">
              <Footer />
            </div>
          </div>
        </div>
      ) : (
        <SingleCompanyComponent selectedId={selectedId} showSingleCompanyComp={SingleCompanyComponent} setShowSingleComp={setShowSingleComp} />
      )}
    </div>
  );
}

export default Pages;
