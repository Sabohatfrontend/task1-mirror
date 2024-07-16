import { ErrorBoundary } from './companents';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from './layout/HomeLayout';
import { ErrorPage } from './pages';
import './App.css';
import { DetailedPage } from './pages/detailedPage/DetailedPage';

const App = () => {
  const roots = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <></>,
        },
        {
          path: ':id',
          element: <DetailedPage />,
        },
      ],
    },
  ]);

  return (
    <ErrorBoundary>
      <RouterProvider router={roots} />
    </ErrorBoundary>
  );
};

export default App;
