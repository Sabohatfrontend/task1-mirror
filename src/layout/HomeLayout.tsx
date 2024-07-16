import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Header } from '../companents';
import { MainPage } from '../pages';
import './HomeLayout.css';

export const HomeLayout = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleClose = () => {
    if (id) navigate('/');
  };

  return (

    <div className="content">
      <Header />
      <div className={id ? 'main-content' : 'main-page'}>
        <main onClick={handleClose}>
          <MainPage />
        </main>
        <Outlet />
      </div>
    </div>

  );
};
