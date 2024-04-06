import NavigationLayout from 'components/navLayout';
import settingsImg from '../assets/settings.png';

const SettingsPage = () => {
    return (
        <NavigationLayout>
            <img src={settingsImg} alt='' width='100%' height='100%' />
        </NavigationLayout>
    );
};

export default SettingsPage;
