import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import MainRoot from '../Layout/MainRoot';
import Menu from '../Pages/Menu/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Dashboard from '../Layout/Dashboard';
import Cart from '../Pages/Dashboard/Cart/Cart';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/order',
        element: <Order />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>,
      },
    ],
  },
]);
