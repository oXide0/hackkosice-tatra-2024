import { Box } from '@chakra-ui/react';
import React from 'react';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box display='flex' flexDirection='column' alignItems='center' height='100%' pt={28} px={4}>
            {children}
        </Box>
    );
};

export default PageLayout;
