import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                background:
                    'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
                backgroundBlendMode: 'multiply,multiply',
            }}
        >
            <Container
                maxWidth='md'
                sx={{
                    height: '100vh',
                    background: '#1E1E2D',
                    color: 'text.primary',
                    fontWeight: '100',
                    px: 0,
                    pt: 0,
                }}
            >
                <Outlet />
            </Container>
        </Box>
    );
};

export default Layout;
