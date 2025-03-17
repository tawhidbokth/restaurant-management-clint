import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const UserAnalytics = () => {
  // Fake data for User Analytics
  const userOrderData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Your Orders',
        data: [3, 5, 2, 6, 4, 7, 8],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        pointRadius: 4,
        fill: true,
      },
    ],
  };

  // Fake data for User Base Analytics
  const userBaseData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Total Orders',
        data: [120, 150, 200, 180, 250, 300, 280],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        pointRadius: 4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Orders',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Analytics
        </h1>
        <p className="text-gray-600">
          Welcome to your restaurant management dashboard.
        </p>
      </div>

      {/* Tabs for User Analytics and User Base Analytics */}
      <div className="mb-8">
        <div className="flex space-x-4 border-b">
          <button className="px-4 py-2 text-lg font-semibold text-blue-600 border-b-2 border-blue-600">
            Your Analytics
          </button>
          <button className="px-4 py-2 text-lg font-semibold text-gray-600 hover:text-blue-600">
            User Base Analytics
          </button>
        </div>
      </div>

      {/* User Analytics Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Your Analytics
        </h2>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Orders */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">
              Your Total Orders
            </h3>
            <p className="text-2xl font-bold text-blue-600">35</p>
            <p className="text-sm text-gray-500">+10% from last month</p>
          </div>

          {/* Total Spending */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">
              Your Total Spending
            </h3>
            <p className="text-2xl font-bold text-green-600">$1,234</p>
            <p className="text-sm text-gray-500">+15% from last month</p>
          </div>

          {/* Average Order Value */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">
              Your Avg. Order Value
            </h3>
            <p className="text-2xl font-bold text-purple-600">$45.67</p>
            <p className="text-sm text-gray-500">+5% from last month</p>
          </div>

          {/* Favorite Category */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">
              Favorite Category
            </h3>
            <p className="text-2xl font-bold text-yellow-600">Pizza</p>
            <p className="text-sm text-gray-500">Most ordered category</p>
          </div>
        </div>

        {/* Order Trends Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Your Order Trends
          </h3>
          <Line data={userOrderData} options={options} />
        </div>
      </div>

      {/* User Base Analytics Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          User Base Analytics
        </h2>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Orders */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">
              Total Orders
            </h3>
            <p className="text-2xl font-bold text-blue-600">1,234</p>
            <p className="text-sm text-gray-500">+12% from last month</p>
          </div>

          {/* Total Revenue */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">
              Total Revenue
            </h3>
            <p className="text-2xl font-bold text-green-600">$12,345</p>
            <p className="text-sm text-gray-500">+8.5% from last month</p>
          </div>

          {/* Average Order Value */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">
              Avg. Order Value
            </h3>
            <p className="text-2xl font-bold text-purple-600">$45.67</p>
            <p className="text-sm text-gray-500">+3.2% from last month</p>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">
              Customer Satisfaction
            </h3>
            <p className="text-2xl font-bold text-yellow-600">92%</p>
            <p className="text-sm text-gray-500">+2.5% from last month</p>
          </div>
        </div>

        {/* Order Trends Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            User Base Order Trends
          </h3>
          <Line data={userBaseData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics;
