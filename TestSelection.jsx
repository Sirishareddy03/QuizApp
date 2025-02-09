import React from 'react'
import { Questions } from '../data/question';

const TestSelection = ({onselectCategory}) => {
    //hard coded values to test
    // let categories=["HTML","CSS","BOOTSTRAP","JAVASCRIPT"]
    //Accessing the values dynamically
    let categories=Object.keys(Questions);
  return (
    <div className='container'>
      <h2 className=''>Take the test</h2>
        <div className='card p-4 shadow'style={{marginTop:'50px'}}>
          <div className='d-grid gap-3' >
            {
                categories.map((sub)=>(
                <button key={sub} onClick={()=>onselectCategory(sub)} className='btn btn-success mx-2'>{sub}</button>
                )
            )
            }
            </div>
            </div>
            </div>
  )
}

export default TestSelection