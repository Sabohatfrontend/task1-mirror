import { Outlet } from 'react-router-dom';
import { Header } from '../companents';

export const HomeLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

