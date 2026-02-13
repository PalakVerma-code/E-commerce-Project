import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className='w-full'>
      {/* Title Section */}
      <div className='text-2xl sm:text-3xl text-center pt-8 sm:pt-12 border-t mb-8 sm:mb-12'>
        <Tittle text1={'CONTACT'} text2={'US'}/>
      </div>

      {/* Main Content - Image Left, Info Right */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 sm:mb-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start'>
          {/* Left Side - Image */}
          <div className='w-full'>
            <img 
              className='w-full h-auto rounded-lg shadow-lg object-cover' 
              src={assets.contact_img} 
              alt="Contact Us" 
            />
          </div>

          {/* Right Side - Contact Information */}
          <div className='flex flex-col gap-10 sm:gap-12'>
            {/* Our Store Section */}
            <div className='border-b pb-8 sm:pb-10'>
              <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-6'>Our Store</h3>
              <div className='space-y-4 text-sm sm:text-base text-gray-700'>
                <div>
                  <p className='font-semibold text-gray-900 mb-1'>Address</p>
                  <p>54709 Willms Station</p>
                  <p>Suite 350, Washington, USA</p>
                </div>
                <div>
                  <p className='font-semibold text-gray-900 mb-1'>Phone</p>
                  <p>Tel: (615) 555-0132</p>
                </div>
                <div>
                  <p className='font-semibold text-gray-900 mb-1'>Email</p>
                  <p>Email: admin@forever.com</p>
                </div>
              </div>
            </div>

            {/* Careers Section */}
            <div>
              <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>Careers at Forever</h3>
              <p className='text-sm sm:text-base text-gray-700 leading-relaxed mb-6'>
                Learn more about our teams and job openings. We're always looking for talented individuals to join our growing team and help us revolutionize the fashion industry.
              </p>
              <button className='bg-black text-white text-sm font-semibold px-8 py-3 rounded hover:bg-gray-800 transition-colors'>
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
     <NewsletterBox/>
    </div>
  )
}

export default Contact