import {
  ErrorBoundary
} from './companents';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from './layout/HomeLayout';
import { ErrorPage, MainPage } from './pages';
import './App.css';

const App = () => {
  const roots = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <MainPage />
        }
      ]
    }
  ])

  return (
    <ErrorBoundary>
      <RouterProvider router={roots} />
    </ErrorBoundary>
  );
};

export default App;
