import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='text-2xl sm:text-3xl text-center pt-8 sm:pt-12 border-t'>
        <Tittle text1={'ABOUT'} text2={'US'}/>
      </div>

      {/* Image and Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12'>
        {/* About Section - Image Left, Content Right */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16'>
          {/* Left Side - Image */}
          <div className='flex items-center justify-center'>
            <img className='w-full max-w-md h-auto rounded-lg shadow-md' src={assets.about_img} alt="About Us" />
          </div>

          {/* Right Side - About Description */}
          <div className='flex flex-col justify-center gap-4 sm:gap-6'>
            <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>Our Story</h2>
            <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
              Welcome to our online clothing store! We are passionate about fashion and committed to providing you with the latest trends and timeless styles. Our mission is to offer high-quality, stylish clothing that empowers you to express your unique personality and confidence.
            </p>
            <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
              At our store, we believe that fashion is more than just clothing; it's a form of self-expression. We curate a diverse collection of apparel, from casual wear to formal attire, ensuring that there's something for everyone. Our team carefully selects each piece to ensure it meets our standards of quality, style, and comfort.
            </p>
            <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
              We are dedicated to providing exceptional customer service and a seamless shopping experience. Whether you're looking for the perfect outfit for a special occasion or updating your everyday wardrobe, we are here to help you find exactly what you need. Thank you for choosing us as your go-to destination for all things fashion!
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className='bg-linear-to-r from-blue-50 to-purple-50 p-8 sm:p-12 rounded-lg shadow-md border border-gray-200 mb-12 sm:mb-16'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>Our Mission</h2>
          <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
            Our mission is to empower individuals to express their unique style and confidence through high-quality, fashionable clothing. We are committed to providing a diverse range of apparel that caters to all tastes and occasions, while ensuring exceptional customer service and a seamless shopping experience.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className='mb-12 sm:mb-16'>
          <div className='text-2xl sm:text-3xl mb-6 sm:mb-8'>
            <Tittle text1={'WHY'} text2={'CHOOSE US?'}/>
          </div>
          <p className='text-gray-700 text-sm sm:text-base mb-8 leading-relaxed'>
            We understand that you have many options when it comes to shopping for clothing, and we want to share why we believe our store stands out from the rest:
          </p>

          {/* Features Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {/* Feature 1 */}
            <div className='bg-white border-l-4 border-blue-500 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <h4 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2'>
                <span className='text-blue-500 text-2xl'>★</span>
                Curated Collection
              </h4>
              <p className='text-gray-700 text-sm sm:text-base leading-relaxed'>
                We carefully select each item in our collection to ensure it meets our standards of quality, style, and comfort. Our diverse range of apparel caters to all tastes and occasions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='bg-white border-l-4 border-green-500 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <h4 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2'>
                <span className='text-green-500 text-2xl'>✓</span>
                Exceptional Customer Service
              </h4>
              <p className='text-gray-700 text-sm sm:text-base leading-relaxed'>
                We are dedicated to providing outstanding customer service. Our team is here to assist you with any questions or concerns, ensuring a smooth and enjoyable shopping experience.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='bg-white border-l-4 border-purple-500 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <h4 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2'>
                <span className='text-purple-500 text-2xl'>❤</span>
                Fashion for Everyone
              </h4>
              <p className='text-gray-700 text-sm sm:text-base leading-relaxed'>
                We believe that fashion should be inclusive and accessible to all. Our store offers a wide variety of styles and sizes, ensuring that everyone can find something that suits their unique personality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  )
}

export default About