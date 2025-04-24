import React, { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: '5 Must-Try Dishes at Our Restaurant',
    excerpt:
      'Discover the most loved meals by our customers and why they keep coming back!',
    image:
      'https://i.ibb.co.com/KjgtQR5X/young-man-making-salad-2022-02-02-20-08-47-utc-700x466.jpg',
    date: 'April 20, 2025',
    author: 'Chef Rahim',
  },
  {
    id: 2,
    title: 'Upcoming Spring Menu: What to Expect',
    excerpt:
      'Get a sneak peek into our fresh, seasonal ingredients and new delicious creations.',
    image:
      'https://i.ibb.co.com/kghp6sm8/fusilli-with-tuna-salad-2021-08-26-16-16-00-utc-700x466.jpg',
    date: 'April 15, 2025',
    author: 'Admin',
  },
  {
    id: 3,
    title: 'Behind the Scenes: Our Kitchen in Action',
    excerpt:
      'Take a look at how our chefs craft your favorite meals every day.',
    image:
      'https://i.ibb.co.com/5xG4YcfP/salad-with-beet-2021-08-27-17-07-53-utc-700x466.jpg',
    date: 'April 10, 2025',
    author: 'Manager Team',
  },
];

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = post => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section className="py-16 " id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Latest From Our Blog</h2>
          <p className="mt-2 text-gray-500">
            Stay updated with our stories, news, and food inspiration.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
            <div
              key={post.id}
              className=" rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm ">
                  {post.date} • {post.author}
                </span>
                <h3 className="text-xl font-semibold  mt-2">{post.title}</h3>
                <p className="mt-2">{post.excerpt}</p>
                <button
                  onClick={() => openModal(post)}
                  className="text-orange-500 font-medium mt-4 inline-block hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full rounded-xl p-6 shadow-lg relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">
              {selectedPost.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {selectedPost.date} • {selectedPost.author}
            </p>
            <p className="text-gray-700 mt-4">{selectedPost.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
