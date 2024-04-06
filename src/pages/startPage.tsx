import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import slide1 from '../assets/slide-1.png';
import slide2 from '../assets/slide-2.png';
import slide3 from '../assets/slide-3.png';
import start1 from '../assets/start-1.png';
import start2 from '../assets/start-2.png';
import start3 from '../assets/start-3.png';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const navigate = useNavigate();

    const handleClick = () => {
        if (currentSlide === 3) {
            navigate('/login');
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    return (
        <Box display='flex' flexDirection='column' height='100%' pb={4} px={4}>
            <Box
                flex='1 1 auto'
                display='flex'
                justifyContent='center'
                flexDirection='column'
                gap={4}
            >
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                >
                    <Slide number={currentSlide} />
                </motion.div>
            </Box>
            <Button colorScheme='brand' color='white' w='full' onClick={handleClick}>
                Next
            </Button>
        </Box>
    );
};

export default StartPage;

const Slide = ({ number }: { number: number }) => {
    if (number === 1) {
        return (
            <Box display='flex' flexDirection='column' gap={5}>
                <Image src={start1} />
                <Box display='flex' justifyContent='center'>
                    <Image src={slide1} />
                </Box>
                <Heading>Fastest Payment in the world</Heading>
                <Text>Integrate multiple payment methoods to help you up the process quickly</Text>
            </Box>
        );
    }

    if (number === 2) {
        return (
            <Box display='flex' flexDirection='column' gap={5}>
                <Image src={start2} />
                <Box display='flex' justifyContent='center'>
                    <Image src={slide2} />
                </Box>
                <Heading>The most Secoure Platfrom for Customer</Heading>
                <Text>
                    Built-in Fingerprint, face recognition and more, keeping you completely safe
                </Text>
            </Box>
        );
    }
    if (number === 3) {
        return (
            <Box display='flex' flexDirection='column' gap={5}>
                <Image src={start3} />
                <Box display='flex' justifyContent='center'>
                    <Image src={slide3} />
                </Box>
                <Heading>Paying for Everything is Easy and Convenient</Heading>
                <Text>
                    Built-in Fingerprint, face recognition and more, keeping you completely safe
                </Text>
            </Box>
        );
    }
};
