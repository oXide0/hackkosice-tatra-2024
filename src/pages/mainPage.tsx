import { Box, Heading } from '@chakra-ui/react';
import tatraLogo from '../assets/tatra-logo.png';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <Box
            height='100vh'
            display='flex'
            flexDir='column'
            justifyContent='center'
            alignItems='center'
        >
            <Box pb={10}>
                <img src={tatraLogo} alt='logo' />
            </Box>
            <Heading fontWeight={100} pb={10}>
                Tatra Investments
            </Heading>
            <Button
                width='80%'
                colorScheme='brand'
                textColor='white'
                onClick={() => navigate('/login')}
            >
                Get started
            </Button>
        </Box>
    );
};

export default MainPage;
