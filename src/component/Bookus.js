import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Bookus() {
  const [state, handleSubmit] = useForm("mjkbqkqd");
  
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Use useEffect to trigger the toast and clear the form when the form is successfully submitted
  useEffect(() => {
    if (state.succeeded) {
      toast.success('Thanks for contacting us! We will be in touch soon.');
      
      // Clear form input fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }
  }, [state.succeeded]);

  return (
    <>
      <ToastContainer />
      <div id='book-us' className="flex justify-center w-full bg-black py-8">
        <div className="w-11/12 rounded-xl shadow-2xl mt-4 bg-black grid grid-rows-2 md:grid-cols-2 h-auto md:h-[650px]">
          
          {/* Text Section */}
          <div className="w-full rounded-xl shadow-2xl flex items-center mt-4 justify-center h-auto md:h-[550px] md:mr-4">
            <div className="w-full text-center md:text-left md:w-96">
              <h1 className="text-3xl md:text-6xl text-white font-bold">
                Book our van today
              </h1>
              <div className="mt-6">
                <h2 className="text-2xl md:text-5xl text-white font-semibold">
                  Over 100 luggages packed and delivered
                </h2>
              </div>
              <p className="mt-6 text-sm md:text-lg text-white">
                Book our van today! We are always on time, efficient, and provide top-notch services worth every penny.
              </p>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="pl-4 w-full flex items-center justify-center h-auto md:h-[550px]">
            <form onSubmit={handleSubmit} className="w-full md:w-11/12 bg-white p-8 rounded-xl shadow-lg mt-8 md:mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Booking Form</h2>

              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-sm md:text-base font-semibold text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  className="mt-1 w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 text-sm md:text-base"
                  placeholder="Enter your full name"
                  value={formData.name} // Controlled input
                  onChange={handleChange} // Update state on change
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div className="mb-4">
                <label className="block text-sm md:text-base font-semibold text-gray-700" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name='phone'
                  className="mt-1 w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 text-sm md:text-base"
                  placeholder="Enter your phone number"
                  value={formData.phone} // Controlled input
                  onChange={handleChange} // Update state on change
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-sm md:text-base font-semibold text-gray-700" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  className="mt-1 w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 text-sm md:text-base"
                  placeholder="Enter your email address"
                  value={formData.email} // Controlled input
                  onChange={handleChange} // Update state on change
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-6">
                <label className="block text-sm md:text-base font-semibold text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name='message'
                  className="mt-1 w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 text-sm md:text-base"
                  rows="5"
                  placeholder="Please include date, time, and postcode in your booking message"
                  value={formData.message} // Controlled textarea
                  onChange={handleChange} // Update state on change
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg shadow-md hover:bg-indigo-500 focus:ring focus:ring-indigo-300 text-sm md:text-base"
                  disabled={state.submitting} // Disable button when submitting
                >
                  Submit Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookus