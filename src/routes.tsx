import InvestmentPage from 'pages/investmentPage';
import PortfolioPage from 'pages/portfolioPage';
import SettingsPage from 'pages/settingsPage';
import StartPage from 'pages/startPage';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/layout';
import DashboardPage from './pages/dashboardPage';
import LoginPage from './pages/loginPage';
import ChatPage from 'pages/chatPage';
import MainPage from 'pages/mainPage';

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/start' element={<StartPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/investment' element={<InvestmentPage />} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/chat' element={<ChatPage />} />
        </Route>
    )
);
