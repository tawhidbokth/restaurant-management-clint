import React, { useState } from 'react';

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
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-orange-500 text-lg">Corporate Applications</h3>
      <h2 className="text-4xl font-bold mt-2 mb-4">Our Latest News</h2>
      <p className="text-gray-600 mb-8">
        Assertively myocardinate robust e-tailers for extensible human capital.
      </p>
      <div className="flex justify-center items-center gap-4">
        {/* Previous Button */}
        <button onClick={handlePrev} className="text-2xl">
          &#8592;
        </button>

        {/* News Cards */}
        <div className="flex gap-6 overflow-hidden">
          {newsData.slice(currentIndex, currentIndex + 3).map(news => (
            <div
              key={news.id}
              className="w-80 p-4 border rounded-lg shadow-lg bg-white"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="text-lg font-bold mt-4">{news.title}</h4>
              <p className="text-gray-500 text-sm mt-2">
                <span>{news.comments} Comments</span> | <span>{news.date}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button onClick={handleNext} className="text-2xl">
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default NewsSection;
