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
        loader: () => fetch('http://localhost:5000/foods'),
      },
      {
        path: 'foods/:id',
        element: <SingleFoods></SingleFoods>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: 'purchase/:id',
        element: <PurchaseFoods></PurchaseFoods>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: 'update/:id',
        element: <FoodUpdate></FoodUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: 'gallery',
        element: <Gallery></Gallery>,
      },

      {
        path: 'myfoods',
        element: <MyFoods></MyFoods>,
      },
      {
        path: 'addfoods',
        element: <AddFoods></AddFoods>,
      },
      {
        path: 'myorder',
        element: <MyOrder></MyOrder>,
        loader: () => fetch('http://localhost:5000/foods-purchase'),
      },
    ],
  },
]);
export default router;
