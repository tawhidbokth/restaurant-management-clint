import { useState, useEffect } from 'react';

const ReservationFormTwoColumn = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 2,
    date: '',
    time: '',
    specialRequests: '',
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock API: Fetch available times based on date
  useEffect(() => {
    if (formData.date) {
      const mockTimes = ['17:00', '18:30', '19:00', '20:45', '21:30'];
      setAvailableTimes(mockTimes);
    }
  }, [formData.date]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Reservation submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Reserve Your Table
      </h2>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          {isSuccess && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
              Reservation confirmed! We'll see you soon.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="john@example.com"
                />
              </div>

              {/* Date and Time (side by side on larger screens) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Time Slot (only shows if date is selected) */}
                <div>
                  {formData.date && (
                    <>
                      <label
                        htmlFor="time"
                        className="block text-gray-700 mb-1"
                      >
                        Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="">Select a time</option>
                        {availableTimes.map(time => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
              </div>

              {/* Guests and Special Requests */}
              <div>
                <label htmlFor="guests" className="block text-gray-700 mb-1">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'person' : 'people'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="specialRequests"
                  className="block text-gray-700 mb-1"
                >
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Allergies, celebrations, etc."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 w-full py-3 px-4 bg-amber-600 text-white font-semibold rounded hover:bg-amber-700 transition ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
            </button>
          </form>
        </div>

        {/* Right Column: Additional Info */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Why Reserve With Us?
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-amber-500 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Guaranteed Seating
                </h4>
                <p className="text-gray-600">
                  Avoid wait times with a confirmed table.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-amber-500 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Special Occasions
                </h4>
                <p className="text-gray-600">
                  Let us know if you're celebrating—we'll make it memorable.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-amber-500 mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Flexible Options
                </h4>
                <p className="text-gray-600">
                  Choose indoor, outdoor, or private dining.
                </p>
              </div>
            </div>

            {/* Image or Map Placeholder */}
            <div className="mt-6 bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">
              <p>Restaurant Ambiance Image or Map</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationFormTwoColumn;
