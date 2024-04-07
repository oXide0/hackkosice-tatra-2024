import { Box, IconButton } from '@chakra-ui/react';
import { AiOutlineStock } from 'react-icons/ai';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import { GoHome } from 'react-icons/go';
import { HiDotsHorizontal } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const loction = useLocation();

    return (
        <Box
            px={4}
            display='flex'
            bg='#2C2D31'
            justifyContent='space-between'
            pos='absolute'
            w='full'
            bottom={0}
            py={2}
            borderTopRadius={20}
        >
            <IconButton
                aria-label='dashboard'
                bg='none'
                px={5}
                py={7}
                _hover={{ bg: 'none' }}
                color={loction.pathname === '/dashboard' ? 'brand' : 'gray'}
                as={Link}
                to='/dashboard'
            >
                <GoHome size='2rem' />
            </IconButton>
            <IconButton
                aria-label='portfolio'
                bg='none'
                px={5}
                py={7}
                _hover={{ bg: 'none' }}
                color={loction.pathname === '/portfolio' ? 'brand' : 'gray'}
                as={Link}
                to='/portfolio'
            >
                <PortfolioIcon active={loction.pathname === '/portfolio'} />
            </IconButton>
            <IconButton
                aria-label='chat'
                bg='none'
                px={5}
                py={7}
                _hover={{ bg: 'none' }}
                color={loction.pathname === '/chat' ? 'brand' : 'gray'}
                as={Link}
                to='/chat'
            >
                <IoChatbubbleEllipsesSharp size='2rem' />
            </IconButton>
            <IconButton
                aria-label='investment'
                bg='none'
                px={5}
                py={7}
                _hover={{ bg: 'none' }}
                color={loction.pathname === '/investment' ? 'brand' : 'gray'}
                as={Link}
                to='/investment'
            >
                <AiOutlineStock size='2rem' />
            </IconButton>
            <IconButton
                aria-label='settings'
                bg='none'
                px={5}
                py={7}
                _hover={{ bg: 'none' }}
                color={loction.pathname === '/settings' ? 'brand' : 'gray'}
                as={Link}
                to='/settings'
            >
                <HiDotsHorizontal size='2rem' />
            </IconButton>
        </Box>
    );
};

export default Navigation;

const PortfolioIcon = ({ active }: { active: boolean }) => {
    return (
        <svg
            width='29'
            height='28'
            viewBox='0 0 29 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M23.8335 7.00004H20.3335V4.66671C20.3335 3.37171 19.2952 2.33337 18.0002 2.33337H11.0002C9.70516 2.33337 8.66683 3.37171 8.66683 4.66671V7.00004H5.16683C3.87183 7.00004 2.8335 8.03837 2.8335 9.33337V22.1667C2.8335 23.4617 3.87183 24.5 5.16683 24.5H23.8335C25.1285 24.5 26.1668 23.4617 26.1668 22.1667V9.33337C26.1668 8.03837 25.1285 7.00004 23.8335 7.00004ZM11.0002 4.66671H18.0002V7.00004H11.0002V4.66671ZM23.8335 22.1667H5.16683V19.8334H23.8335V22.1667ZM23.8335 16.3334H5.16683V10.5C5.16683 9.85837 5.69183 9.33337 6.3335 9.33337H8.66683V10.5C8.66683 11.1417 9.19183 11.6667 9.8335 11.6667C10.4752 11.6667 11.0002 11.1417 11.0002 10.5V9.33337H18.0002V10.5C18.0002 11.1417 18.5252 11.6667 19.1668 11.6667C19.8085 11.6667 20.3335 11.1417 20.3335 10.5V9.33337H22.6668C23.3085 9.33337 23.8335 9.85837 23.8335 10.5V16.3334Z'
                fill={active ? '#FFFFFF' : '#808080'}
            />
        </svg>
    );
};
