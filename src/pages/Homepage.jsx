import React from 'react'

function Homepage() {
  return (
    <div>
      
      <div className="top-section">
        
        <div alt="" id="homepageimg" className='pb-6'>
            <p id='top-cta' className='hover:underline hover:underline-offset-4 text-white'>Discover New</p>
        </div>
        </div>

    
      <div className="second-section">
        
        <div alt="" className='pb-6 img second mt-2'>
            <h2 className='text-white text-7xl title'>Pants</h2>
            <p id='top-cta' className='hover:underline hover:underline-offset-4 text-white'>View All Pants</p>
        </div>
        </div>
     
      <div className="third-section col-2 flex gap-4">
        
        <div alt="" className='pb-6 img third mt-2'>
            <h2 className='text-white text-7xl title'>Jackets</h2>
            <p id='top-cta' className='hover:underline hover:underline-offset-4 text-white'>View All Jackets</p>
        </div>
        <div alt="" className='pb-6 img fourth mt-2'>
            <h2 className='text-white text-7xl title'>Dresses</h2>
            <p id='top-cta' className='hover:underline hover:underline-offset-4 text-white'>View All Dresses</p>
        </div>
        </div>
     
       
      </div>
   
  )
}

export default Homepage
