import React, { useContext, useState } from 'react';

const newsData = [
  {
    id: 1,
    title: 'Compet supply customized initiatives whereas',
    date: 'October 12, 2020',
    comments: 3,
    image: 'https://i.ibb.co.com/tq56Twd/service-img-1-3.jpg',
  },
  {
    id: 2,
    title: 'Dynamically enable cutting content without',
    date: 'January 14, 2021',
    comments: 5,
    image: 'https://i.ibb.co.com/LC3CnGh/gallery-img-1-3-1.jpg',
  },
  {
    id: 3,
    title: 'Monotonectally deploy focused e-services',
    date: 'March 10, 2021',
    comments: 8,
    image: 'https://i.ibb.co.com/hLqBH9M/gallery-img-1-4-1.jpg',
  },
  {
    id: 4,
    title: 'Authoritatively orchestrate cross-platform ideas',
    date: 'June 22, 2021',
    comments: 6,
    image: 'https://i.ibb.co.com/LC3CnGh/gallery-img-1-3-1.jpg',
  },
  {
    id: 5,
    title: 'Interactively formulate mission-critical partnerships',
    date: 'September 15, 2021',
    comments: 4,
    image: 'https://i.ibb.co.com/52FgCDs/gallery-img-1-2.jpg',
  },
];

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? newsData.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === newsData.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={'py-16 '}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-orange-500 text-lg font-semibold">
          Corporate Applications
        </h3>
        <h2 className="text-4xl font-bold mt-2 mb-6">Our Latest News</h2>
        <p className="text-gray-600 mb-10">
          Assertively myocardinate robust e-tailers for extensible human
          capital.
        </p>

        {/* News Section */}
        <div className="flex flex-col items-center">
          <div className="flex gap-4 items-center">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="bg-orange-500 text-white rounded-full p-3 hover:bg-orange-600 transition duration-300"
            >
              &#8592;
            </button>

            {/* News Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.slice(currentIndex, currentIndex + 3).map(news => (
                <div
                  key={news.id}
                  className="p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h4 className="text-lg font-semibold mt-4">{news.title}</h4>
                  <p className="text-gray-500 text-sm mt-2">
                    <span>{news.comments} Comments</span> |{' '}
                    <span>{news.date}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="bg-orange-500 text-white rounded-full p-3 hover:bg-orange-600 transition duration-300"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
