import React from 'react'
import itCompanies from './ItCompaniesData'

function SingleCompanyComponent({selectedId, showSingleCompanyComp, setShowSingleComp}) {
    console.log(selectedId)
  return (
    <div className='container-xl mx-auto'>
        <div className='d-flex justify-content-end' onClick={() => setShowSingleComp(!showSingleCompanyComp)}>
            <button className='btn btn-success mt-4  mx-4' >Back To Pages Tab</button>
        </div>
        <div class="row">
            <div class="col-9">
                <div className="card">
                    <img src={itCompanies[selectedId].logoUrl} alt="" />
                    
                </div>
            </div>
            <div class="col-3">col-4</div>
        </div>
    </div>
  )
}

export default SingleCompanyComponent
