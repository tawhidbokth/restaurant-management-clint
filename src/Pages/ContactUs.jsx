import React from 'react';

const ContactUs = () => {
  return (
    <section className="min-h-screen py-16 " id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold ">Contact Us</h2>
          <p className="mt-2 ">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8  p-8 rounded-2xl shadow">
          <div>
            <h3 className="text-xl font-semibold  mb-4">Get In Touch</h3>
            <p className=" mb-4">
              Visit us or drop a message. We're here to help you.
            </p>
            <p className=" mb-2">
              <strong>Address:</strong> 123 Foodie Street, City, Country
            </p>
            <p className=" mb-2">
              <strong>Phone:</strong> +123 456 789
            </p>
            <p className="">
              <strong>Email:</strong> info@restaurant.com
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm  mb-1">Name</label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
              />
            </div>
            <div>
              <label className="block text-sm  mb-1">Email</label>
              <input
                type="email"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
              />
            </div>
            <div>
              <label className="block text-sm  mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-orange-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
