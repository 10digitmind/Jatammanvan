import React from 'react';
import van from '../Images/downloadhouse-vav.png';
import van2 from '../Images/downloadnew.png'
import van3 from '../Images/downloadspace.png'
const services = [
  {
    title: 'House Moving',
    description: 'Are you planning to move to a new home? Our van company is here to make your house moving experience smooth and stress-free. We offer a wide range of services tailored to meet your specific needs.',
    imgSrc: van
  },
  {
    title: 'Office Moving',
    description: 'Are you planning to relocate your office? Look no further! Our professional moving company specializes in seamless office relocations. We understand the unique challenges involved in moving an entire office, and we are here to make the process smooth and efficient. We are here to give you the best service..',
    imgSrc: van2
  },
  {
    title: 'Product Moving',
    description: "Are you in need of professional assistance to move your valuable products? Our reliable moving company specializes in efficient and secure product transportation. Whether you're relocating inventory for a retail business or need to move products from one distribution center to another, we are here to provide comprehensive moving solutions.",
    imgSrc: van3
  }
];

function Ourservices() {
  return (
    <div id="Ourservices" className="justify-center w-full">
      {/* Section Title */}
      <div className='w-full h-16 flex justify-center items-center mt-16'>
        <h2 className='text-3xl'>Our Services</h2>
      </div>

      {/* Service Grid */}
      <div className="w-full rounded-xl shadow-2xl mt-4 grid grid-cols-1 md:grid-cols-1 gap-8 h-auto">
        {services.map((service, index) => (
          <div key={index} className={`w-full pl-8 rounded-xl shadow-2xl flex flex-col md:flex-row items-center mt-4 ${index===1 ? 'bg-indigo-600':''} justify-center h-auto md:h-[550px] `}>
            {/* Service Text */}
            <div className='w-full text-center md:text-left md:w-1/2 mb-4 md:mb-0'>
              <h1 className={`text-3xl md:text-6xl ${index===1 ? 'text-white':'text-black'} font-bold`}>
                {service.title}
              </h1>
              <p className={`mt-6 text-sm md:text-lg ${index===1 ? 'text-white':'text-black'}`}>
                {service.description}
              </p>
            </div>

            {/* Service Image */}
            <div className="pl-4 w-full flex justify-center md:w-1/2">
              <img className='h-64 md:h-96 rounded-xl shadow-2xl' src={service.imgSrc} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourservices;
