import { Box, Heading, Input } from '@chakra-ui/react';
import NavigationLayout from 'components/navLayout';
import stocks from '../assets/stocks.png';

const InvestmentPage = () => {
    return (
        <NavigationLayout>
            <Box display='flex' flexDir='column' px={6}>
                <Heading fontWeight={200} textAlign='center' pt={4}>
                    Investments
                </Heading>
                <Input placeholder='Search investments' sx={{ mt: 10 }} />
                <Box pt={2}>
                    <img src={stocks} alt='' />
                </Box>
            </Box>
        </NavigationLayout>
    );
};

export default InvestmentPage;
