import React from 'react'

function Footer() {
  return (
    <div className='footer flex justify-between'>
      <div className="logo ml-8"><h2 className='title text-6xl text-teal-900'>La Femme</h2></div>
      <div className="links w-full flex justify-around">
        <div className="orders">
            <h3 className='title text-2xl text-teal-900'>Orders</h3>
            <a href=""><p>Follow My Order</p></a>
            <a href=""><p>Manage My Order</p></a>
            <a href=""><p>My Account</p></a>
        </div>
        <div className="Help">
            <h3 className='title text-2xl text-teal-900'>Help</h3>
        <a href=""><p>Contact</p></a>
            <a href=""><p>FAQ</p></a>
            <a href=""><p>Size Guide</p></a>
            <a href=""><p>Care Guide</p></a>
        </div>
        <div className="About">
        <h3 className='title text-2xl text-teal-900'>About</h3>
        <a href=""><p>La Femme</p></a>
            <a href=""><p>Locations</p></a>
            <a href=""><p>Join The Team</p></a>
            <a href=""><p>Design</p></a>
            <a href=""><p>Influencers</p></a>
        </div>
        <div className="Legal">
        <h3 className='title text-2xl text-teal-900'>Legal</h3>
        <a href=""><p>Privacy</p></a>
            <a href=""><p>Legal Info</p></a>
            <a href=""><p>Technology</p></a>
            <a href=""><p>Accessibility</p></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
