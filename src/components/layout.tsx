import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='max-w-md my-0 mx-auto bg-red-400'>
            <h1 className='text-2xl font-bold text-white text-center'>Investing App</h1>
            <Outlet />
        </div>
    );
};

export default Layout;
