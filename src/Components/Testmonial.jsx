import React, { useContext } from 'react';
import { ThemeContext } from '../Provider/ThemeProvider';

const Testmonial = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={`py-16  ${
          theme === 'light'
            ? 'bg-gray-100 text-black'
            : 'bg-gray-900 text-gray-100'
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className={`text-3xl font-extrabold  sm:text-4xl  ${
              theme === 'light' ? ' text-black' : ' text-white'
            } `}
          >
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from our happy customers about their amazing experiences with
            us.
          </p>
        </div>

        <div className="mt-10 relative">
          {/* Review Container */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 w-[1400px] mx-auto overflow-x-auto snap-x snap-mandatory px-8">
            {/* Review 1 */}
            <div className="snap-center flex-shrink-0 bg-white rounded-lg shadow-lg p-6 w-80">
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.ibb.co.com/xfS5Rfp/385490917-1510631689733100-2473354057220819702-n-LE-upscale-balanced-x4-removebg-preview-1-modified.png"
                  alt="Customer"
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Tawhid
                  </h3>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                "This service has been a game-changer. Highly recommend!"
              </p>
              <div className="flex items-center justify-center mt-6">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="snap-center flex-shrink-0 bg-white rounded-lg shadow-lg p-6 w-80">
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.ibb.co.com/xfS5Rfp/385490917-1510631689733100-2473354057220819702-n-LE-upscale-balanced-x4-removebg-preview-1-modified.png"
                  alt="Customer"
                  className="w-16 h-16 rounded-full border-2 border-green-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Jane Smith
                  </h3>
                  <p className="text-sm text-gray-500">Marketing Specialist</p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                "Incredible attention to detail and fantastic support!"
              </p>
              <div className="flex items-center justify-center mt-6">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="snap-center flex-shrink-0 bg-white rounded-lg shadow-lg p-6 w-80">
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.ibb.co.com/xfS5Rfp/385490917-1510631689733100-2473354057220819702-n-LE-upscale-balanced-x4-removebg-preview-1-modified.png"
                  alt="Customer"
                  className="w-16 h-16 rounded-full border-2 border-red-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Emily Davis
                  </h3>
                  <p className="text-sm text-gray-500">UX Designer</p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                "I loved the seamless process and the amazing results!"
              </p>
              <div className="flex items-center justify-center mt-6">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>

            {/* Review 4 */}
            <div className="snap-center flex-shrink-0 bg-white rounded-lg shadow-lg p-6 w-80">
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.ibb.co.com/xfS5Rfp/385490917-1510631689733100-2473354057220819702-n-LE-upscale-balanced-x4-removebg-preview-1-modified.png"
                  alt="Customer"
                  className="w-16 h-16 rounded-full border-2 border-purple-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Michael Lee
                  </h3>
                  <p className="text-sm text-gray-500">Entrepreneur</p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                "Exceeded my expectations. Truly outstanding service!"
              </p>
              <div className="flex items-center justify-center mt-6">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
