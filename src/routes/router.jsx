import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Components/Home';
import AllFoods from '../Pages/AllFoods';
import Gallery from '../Pages/Gallery';
import MyFoods from '../Pages/MyFoods';
import AddFoods from '../Pages/AddFoods';
import MyOrder from '../Pages/MyOrder';
import SingleFoods from '../Pages/SingleFoods';
import FoodUpdate from '../Pages/FoodUpdate';
import PurchaseFoods from './../Pages/PurchaseFoods';
import ErrorPage from '../Pages/ErrorPage';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Dashboard/Dashboard';
import Analytics from '../Pages/Analytics';
import UserAnalytics from '../Pages/UserAnalytics';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: 'allfoods',
        element: <AllFoods></AllFoods>,
        loader: () =>
          fetch('https://restaurant-management-server-lilac.vercel.app/foods'),
      },
      {
        path: 'foods/:id',
        element: <SingleFoods></SingleFoods>,
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-lilac.vercel.app/foods/${params.id}`
          ),
      },
      {
        path: 'purchase/:id',
        element: (
          <PrivateRoute>
            <PurchaseFoods></PurchaseFoods>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-lilac.vercel.app/foods/${params.id}`
          ),
      },
      {
        path: 'update/:id',
        element: <FoodUpdate></FoodUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-lilac.vercel.app/foods/${params.id}`
          ),
      },
      {
        path: 'gallery',
        element: <Gallery></Gallery>,
      },
    ],
  },

  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'dashboard',
        element: <h1>our dashboard</h1>,
      },

      {
        path: 'myfoods',
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: 'addfoods',
        element: (
          <PrivateRoute>
            <AddFoods></AddFoods>
          </PrivateRoute>
        ),
      },
      {
        path: 'analytics',
        element: <Analytics></Analytics>,
      },
      {
        path: 'useranalytics',
        element: <UserAnalytics></UserAnalytics>,
      },
      {
        path: 'myorder',
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            'https://restaurant-management-server-lilac.vercel.app/foods-purchase'
          ),
      },
    ],
  },
]);
export default router;
