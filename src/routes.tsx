import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
        </Route>
    )
);
