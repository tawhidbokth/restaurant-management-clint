import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Analytics = () => {
  // Fake data for the bar chart
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [5000, 7000, 4500, 8000, 6000, 9000, 12000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
          text: 'Revenue ($)',
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

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
          <p className="text-2xl font-bold text-green-600">$12,345</p>
          <p className="text-sm text-gray-500">+8.5% from last month</p>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
          <p className="text-2xl font-bold text-blue-600">1,234</p>
          <p className="text-sm text-gray-500">+12% from last month</p>
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Revenue Overview
          </h3>
          <Bar data={revenueData} options={options} />
        </div>

        {/* Order Trends Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Order Trends
          </h3>
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">
              Chart Placeholder (e.g., Line Chart)
            </span>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Recent Orders
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Order ID
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Customer
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Amount
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Fake Data Rows */}
              <tr className="border-b">
                <td className="px-4 py-3 text-sm text-gray-700">#12345</td>
                <td className="px-4 py-3 text-sm text-gray-700">John Doe</td>
                <td className="px-4 py-3 text-sm text-gray-700">$45.67</td>
                <td className="px-4 py-3 text-sm text-green-600">Completed</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 text-sm text-gray-700">#12346</td>
                <td className="px-4 py-3 text-sm text-gray-700">Jane Smith</td>
                <td className="px-4 py-3 text-sm text-gray-700">$67.89</td>
                <td className="px-4 py-3 text-sm text-yellow-600">Pending</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 text-sm text-gray-700">#12347</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  Alice Johnson
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">$89.12</td>
                <td className="px-4 py-3 text-sm text-red-600">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
