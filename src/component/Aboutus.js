import React from "react";
import heroImage from "../Images/downloadvan.png";
import review from '../Images/undraw_reviews_lp8w.png'

function Aboutus() {
  return (
    <div id="Aboutus" className="justify-center w-full">
      <div className="w-full  flex justify-center items-center mt-16">
        <h2 className="text-3xl">About us</h2>
      </div>
      <div className="flex-row h-[auto] w-full bg-indigo-600 h-[550px]  justify-center" >
        <div className="flex items-center justify-center w-full pt-4 ">
          <img className="h-[300px] rounded-xl shadow-2xl" src={heroImage} alt="" />
        </div>
        <div className="flex items-center justify-center  w-full pt-4">
          <p className="w-[60%] text-white text-base">
            We are a dedicated van business committed to providing top-notch
            services tailored to meet your delivery and transportation needs.
            With years of experience in the industry, we have built a strong
            reputation for our professionalism, exceptional customer service,
            and on-time deliveries.we understand the importance of reliable and
            efficient transportation in today's fast-paced world. Whether you
            require cargo delivery, last-mile delivery, moving services, or
            specialized transportation, we have the expertise and resources to
            get the job done seamlessly.Customer satisfaction is at the heart of
            everything we do. We believe in building long-term relationships
            with our clients based on trust, reliability, and exceptional
            service. We work closely with you to understand your specific
            requirements, offering personalized solutions that cater to your
            unique needs. Our dedicated customer support team is available to
            address any queries or concerns you may have, providing prompt and
            efficient assistance.
          </p>
        </div>
       <div>
       <div className="w-full  flex justify-center items-center mt-16">
        <h2 className="text-3xl text-white">Customer reviews</h2>
      </div>
      <div className="flex justify-center w-full">
      <div className="w-full rounded-xl shadow-2xl mt-4 bg-white grid grid-rows-2 md:grid-cols-2 h-auto md:h-[580px]">
    
        <div className="w-full rounded-xl shadow-2xl  flex items-center mt-4 justify-center h-auto md:h-[550px] md:mr-4">
          <div className='w-full text-center md:text-left md:w-96'>
            
            {/* Title */}
            <h1 className='text-3xl md:text-6xl text-black font-bold'>
              Best review on bark.com
            </h1>
            
            {/* Call to action */}
          
            
            {/* Additional info */}
            <p className='mt-6 text-sm md:text-lg text-black'>
             Checkout our poitive 5 star review on bark.com
            </p>
            <a href="https://www.bark.com/en/gb/b/jatammanandvan/Dk9Mm/?show_reviews=true"   target="_blank" rel="noopener noreferrer">
  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg shadow-md hover:bg-indigo-500 focus:ring focus:ring-indigo-300 text-sm md:text-base mt-2">
    Read reviews
  </button>
</a>
          </div>

        </div>
         
        <div className="pl-4 w-full flex items-center justify-center h-[300px] md:h-[550px]">
          <img className='h-64 md:h-96 rounded-xl shadow-2xl' src={review} alt='Man and van'/>
        </div>
      </div>
    </div>
       </div>
      </div>
    </div>
  );
}

export default Aboutus;
