import React from 'react'

function Navbar() {
  return (
    <div className='navbar fixed top-0 left-0 right-0'>
      <nav class="bg-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
     
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start max-w-fit">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
          
            <a href="#" class="rounded-md px-3 py-2 text-sm font-light text-white hover:underline hover:underline-offset-4" aria-current="page">Clothing</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-light text-white hover:underline hover:underline-offset-4">Beauty</a>
           
          </div>
        </div>
      </div>

      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
          
            <a href="#" class="title px-3 py-2 text-7xl font-medium text-white" aria-current="page">La Femme</a>
          
           
          </div>
        </div>
      </div>

    

      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <a href="#" class="rounded-md px-3 py-2 text-sm font-light text-white hover:underline hover:underline-offset-4">About LaFemme</a>
      <a href="#" class="rounded-md px-3 py-2 text-sm font-light text-white hover:underline hover:underline-offset-4">Account</a>
      <a href="#" class="rounded-md px-3 py-2 text-sm font-light text-white hover:underline hover:underline-offset-4">Cart</a>

        
      
      </div>
    </div>
  </div>

  
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      
      <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Clothing</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Beauty</a>
    
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
