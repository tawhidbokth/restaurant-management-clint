import { useState, useEffect } from 'react';

const ReservationForm = () => {
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
      // Simulate API call (replace with real backend logic)
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

    // Simulate API submission (replace with actual fetch/axios)
    setTimeout(() => {
      console.log('Reservation submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Book a Table</h2>
      {isSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Reservation confirmed! We'll see you soon.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
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
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
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

        {/* Date */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 mb-2">
            Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]} // Disable past dates
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Time Slot Dropdown (only shows if date is selected) */}
        {formData.date && (
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 mb-2">
              Available Time Slots *
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
          </div>
        )}

        {/* Number of Guests */}
        <div className="mb-4">
          <label htmlFor="guests" className="block text-gray-700 mb-2">
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

        {/* Special Requests */}
        <div className="mb-4">
          <label htmlFor="specialRequests" className="block text-gray-700 mb-2">
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 bg-amber-600 text-white font-semibold rounded hover:bg-amber-700 transition ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
