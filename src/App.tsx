import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Style from './App.module.css';
import HotelsDetails from './layouts/HotelDetailsLayout';
import HotelsList from './layouts/HotelListLayouts';
import Main from './layouts/MainLayout/MainLayouts';
import HomePage from './Pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'list',
        element: <HotelsList />,
      },
      {
        path: 'hotel/:id',
        element: <HotelsDetails />,
      },
    ],
  },
]);
function App() {
  return (
    <div className={Style.container}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
