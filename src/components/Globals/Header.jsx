import React from 'react'

export const Header = () => {
  return (
    <header className='bg-slate-100 py-5'>
      <div className='container mx-auto'>
        <nav className='flex flex-row items-center justify-between'>
          <div className='logo'>
            <a
              className='text-2xl font-bold text-blue-800 font-header'
              href='#'
            >
              MemeGen
            </a>
          </div>

          <ul className='menus list-none flex flex-row items-center justify-end'>
            <li className=' inline-flex items-center justify-center mr-3'>
              <a
                className='flex items-center justify-center text-base text-gray-900 font-normal font-body'
                href='#'
              >
                Home
              </a>
            </li>
            <li className=' inline-flex items-center justify-center mr-3'>
              <a
                className='flex items-center justify-center text-base text-gray-900 font-normal font-body'
                href='#'
              >
                About
              </a>
            </li>
            <li className=' inline-flex items-center justify-center mr-3'>
              <a
                className='flex items-center justify-center text-base text-gray-900 font-normal font-body'
                href='#'
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
