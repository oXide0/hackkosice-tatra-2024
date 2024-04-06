import { Box, Image } from '@chakra-ui/react';
import NavigationLayout from 'components/navLayout';
import avatar from '../assets/avatar.png';
import notification from '../assets/notification.png';
import smile from '../assets/smile.png';
import graph from '../assets/graph.png';
import stats from '../assets/stats.png';
import typeImg from '../assets/type.png';
import currencies from '../assets/currencies.png';

const DashboardPage = () => {
    return (
        <NavigationLayout>
            <Box p={4} display='flex' flexDir='column' gap={1}>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Box>
                        <Image src={avatar} alt='avatar' />
                    </Box>
                    <Box display='flex' gap={3}>
                        <Box>
                            <Image src={notification} alt='notification' />
                        </Box>
                        <Box>
                            <Image src={smile} alt='smile' />
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Box>
                        <img src={stats} />
                    </Box>
                    <Box>
                        <img src={graph} />
                    </Box>
                </Box>
                <Box width='100%' pt={4}>
                    <img src={typeImg} width='100%' />
                </Box>
                <Box pt={4}>
                    <img src={currencies} />
                </Box>
            </Box>
        </NavigationLayout>
    );
};

export default DashboardPage;
