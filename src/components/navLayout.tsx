import { Box } from '@chakra-ui/react';
import Navigation from './navigation';

const NavigationLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box pos='relative' height='100%' width='100%'>
            {children}
            <Navigation />
        </Box>
    );
};

export default NavigationLayout;
