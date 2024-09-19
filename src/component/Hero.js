import React from 'react';
import heroImage from '../Images/downloadvan.png'

function Hero() {
  return (
    <div id='hero' className="flex justify-center w-full">
      <div className="w-full rounded-xl shadow-2xl mt-4  grid grid-rows-2 md:grid-cols-2 h-auto md:h-[580px]">
    
        <div className="w-full rounded-xl shadow-2xl flex items-center mt-4 justify-center h-auto md:h-[550px] md:mr-4">
          <div className='w-full text-center md:text-left md:w-96'>
            
            {/* Title */}
            <h1 className='text-3xl md:text-6xl text-black font-bold'>
              Best man and van in the UK
            </h1>
            
            {/* Call to action */}
            <div className='mt-6'>
              <h2 className='text-2xl md:text-5xl text-black font-semibold'>
                Book Now
              </h2>
              <p className='mt-2 text-lg md:text-xl text-black'>
                07579769107
              </p>
            </div>
            
            {/* Additional info */}
            <p className='mt-6 text-sm md:text-lg text-black'>
              We are safe, trustworthy, and affordable. Competitive price guaranteed.
            </p>
          </div>
          
        </div>
         
        <div className="pl-4 w-full flex items-center justify-center h-[300px] md:h-[550px]">
          <img className='h-64 md:h-96 rounded-xl shadow-2xl' src={heroImage} alt='Man and van'/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
