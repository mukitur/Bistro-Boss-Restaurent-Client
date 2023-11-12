import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import MainRoot from '../Layout/MainRoot';
import Menu from '../Pages/Menu/Menu/Menu';

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
    ],
  },
]);
