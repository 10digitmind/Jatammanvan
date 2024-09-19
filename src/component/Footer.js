import React from 'react';
import logo from '../Images/64a736b326ed51cb1c8ea0dd_logo.png';
import igIcon from '../Images/ig-footer.png'
import fbIcon from '../Images/fb-footer.png'
import titokIcon  from '../Images/tiktok-footer.png'
function Footer() {
  return (
    <>
      <footer className="w-full bg-white py-8 shadow-2xl mt-4">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-lg mx-auto">
          {/* First Column */}
          <div className="w-full md:w-1/3 p-4">
            <img  className="w-16" src={logo} alt={logo}/>
            
          </div>

          {/* Second Column */}
          <div className="w-full md:w-1/3 p-4 flex gap-4">
          <img  className="w-4" src={igIcon} alt={logo}/>
          <img  className="w-4" src={fbIcon} alt={logo}/>
          <img  className="w-4" src={titokIcon} alt={logo}/>
          </div>

          {/* Third Column */}
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-lg font-semibold">contact us </h3>
            <p className="text-sm text-gray-600 mt-2">
            Jatammanandvan@yahoo.com
            </p>
            <p className="text-sm text-gray-600 mt-2">
            07579769107
            </p>
            <p className="text-sm text-gray-600 mt-2">
            Manchester
            Bolton
            </p>
          </div>
          
        </div>
        <div className='w-full flex items center justify-center mt-4'>
            <p className='text-sm'>©  2023  jatmman and van</p>
          </div>
      </footer>
    </>
  );
}

export default Footer;
