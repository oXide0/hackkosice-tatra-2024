import NavigationLayout from 'components/navLayout';
import widget from '../assets/tb-widget_margin.png';
import { Box, Heading, Input } from '@chakra-ui/react';
import top1 from '../assets/top-1.png';
import top2 from '../assets/top-2.png';

const PortfolioPage = () => {
    return (
        <NavigationLayout>
            <Box display='flex' flexDir='column' px={6}>
                <img src={widget} alt='' />
                <Heading fontWeight='200' py={2}>
                    Your shares
                </Heading>
                <Input placeholder='Search investments' />
                <Box
                    display='flex'
                    justifyContent='center'
                    flexDir='column'
                    alignItems='center'
                    pt={2}
                >
                    <img src={top1} alt='' />
                    <img src={top2} alt='' />
                </Box>
            </Box>
        </NavigationLayout>
    );
};

export default PortfolioPage;
