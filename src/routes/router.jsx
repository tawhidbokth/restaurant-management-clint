import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Components/Home';
import AllFoods from '../Pages/AllFoods';
import Gallery from '../Pages/Gallery';
import FoodPurchase from '../Pages/FoodPurchase';
import MyFoods from '../Pages/MyFoods';
import AddFoods from '../Pages/AddFoods';
import MyOrder from '../Pages/MyOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <h1>error</h1>,
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
        path: 'gallery',
        element: <Gallery></Gallery>,
      },
      {
        path: 'purchase',
        element: <FoodPurchase></FoodPurchase>,
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
      },
    ],
  },
]);
export default router;
