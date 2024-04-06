import { Container, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Wrapper>
            <Container maxWidth='xs' sx={{ height: '100vh', background: '#fff' }}>
                <Outlet />
            </Container>
        </Wrapper>
    );
};

export default Layout;

const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    backgroundColor: 'gray',
});
