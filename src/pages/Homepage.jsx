import React from 'react'

function Homepage() {
  return (
    <div className=''>
      
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

        <div className="categories-section flex flex-col justify-center items-center pb-6">
          <div className="categories-img mt-4">

          </div>
          <div className="category-links flex justify-center items-center gap-6 text-4xl title flex-wrap absolute text-teal-900">
            
            <a href=""><h2>Shirts</h2></a>
            <a href=""><h2>Pants</h2></a>
            <a href=""><h2>Dresses</h2></a>
            <a href=""><h2>Bags</h2></a>
            <a href=""><h2>Jackets</h2></a>
            <a href=""><h2>Accessories</h2></a>
            <a href=""><h2>Tops</h2></a>
           
          </div>
          <p id='top-cta' className='hover:underline hover:underline-offset-4 text-white mt-4'>View All Dresses</p>
        </div>
     
       
      </div>
   
  )
}

export default Homepage
