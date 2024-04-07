import {
    Box,
    Button,
    Container,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Heading,
    IconButton,
    Image,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import NavigationLayout from 'components/navLayout';
import { useRef, useState } from 'react';
import avatar from '../assets/avatar.png';
import buildingIcon from '../assets/building.png';
import currencies from '../assets/currencies.png';
import graph from '../assets/graph.png';
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import noIcon from '../assets/no-icon.png';
import notification from '../assets/notification.png';
import smile from '../assets/smile.png';
import stats from '../assets/stats.png';

const DashboardPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null);

    return (
        <NavigationLayout>
            <DrawerExample btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
            <Box p={4} display='flex' flexDir='column' gap={10} height='100%'>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Box>
                        <IconButton aria-label='smile'>
                            <Image src={avatar} alt='avatar' />
                        </IconButton>
                    </Box>
                    <Box display='flex' gap={3}>
                        <Box>
                            <IconButton aria-label='smile'>
                                <Image src={notification} alt='notification' />
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton aria-label='smile' onClick={onOpen}>
                                <Image src={smile} alt='smile' />
                            </IconButton>
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
                <Box display='flex' justifyContent='center' pb={16} flex='1 1 auto'>
                    <img src={currencies} />
                </Box>
            </Box>
        </NavigationLayout>
    );
};

export default DashboardPage;

function DrawerExample({
    isOpen,
    onClose,
    btnRef,
}: {
    isOpen: boolean;
    onClose: () => void;
    btnRef: any;
}) {
    const [show, setShow] = useState(false);

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            size='full'
        >
            <DrawerOverlay />
            <DrawerContent bg='#1E1E2D'>
                <DrawerCloseButton />
                <Container maxWidth='md'>
                    {show ? (
                        <Box
                            display='flex'
                            flexDir='column'
                            justifyContent='center'
                            alignItems='center'
                            height='95vh'
                            pt={10}
                        >
                            <Box flex='1 1 auto'>
                                <Box display='flex' justifyContent='center'>
                                    <img src={buildingIcon} alt='' />
                                </Box>
                                <Text textAlign='center' pt={5}>
                                    Add to your portfolio securities of one of the building
                                    companies in the amount of at least 500 euros.
                                </Text>
                            </Box>
                            <Button
                                colorScheme='brand'
                                color='white'
                                w='full'
                                onClick={() => setShow(false)}
                            >
                                Okay
                            </Button>
                        </Box>
                    ) : (
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            gap={10}
                            pt={10}
                        >
                            <Heading>12/38</Heading>
                            <Box width='100%' display='flex' flexDir='column' gap={10}>
                                <Stack direction='row' justifyContent='space-between'>
                                    <Box>
                                        <img src={icon1} alt='' />
                                        <Text textAlign='center' pt={1}>
                                            Air
                                        </Text>
                                    </Box>
                                    <Box>
                                        <img src={noIcon} alt='' />
                                        <Text textAlign='center' pt={1}>
                                            Space
                                        </Text>
                                    </Box>
                                    <Box>
                                        <img src={noIcon} alt='' />
                                        <Text textAlign='center' pt={1}>
                                            Argon
                                        </Text>
                                    </Box>
                                </Stack>
                                <Stack direction='row' justifyContent='space-between'>
                                    <Box>
                                        <img src={noIcon} alt='' />
                                        <Text textAlign='center' pt={1}>
                                            Mobile
                                        </Text>
                                    </Box>
                                    <Box>
                                        <img src={icon2} alt='' />
                                        <Text textAlign='center' pt={1}>
                                            Anchor
                                        </Text>
                                    </Box>
                                    <Box>
                                        <img src={noIcon} alt='' />
                                        <Text textAlign='center' pt={1}>
                                            Weather
                                        </Text>
                                    </Box>
                                </Stack>
                                <Stack direction='row' justifyContent='space-between'>
                                    <Box>
                                        <img src={noIcon} alt='' />
                                        <Text textAlign='center' pt={1}>
                                            Business
                                        </Text>
                                    </Box>
                                    <Box onClick={() => setShow(true)} cursor='pointer'>
                                        <img src={buildingIcon} alt='' />
                                        <Text textAlign='center' pt={1}>
                                            Building
                                        </Text>
                                    </Box>
                                    <Box>
                                        <img src={noIcon} alt='' />
                                        <Text textAlign='center' pt={1}>
                                            Train
                                        </Text>
                                    </Box>
                                </Stack>
                                <Stack direction='row' justifyContent='space-between'>
                                    <img src={noIcon} alt='' />
                                    <img src={noIcon} alt='' />
                                    <img src={noIcon} alt='' />
                                </Stack>
                            </Box>
                        </Box>
                    )}
                </Container>
            </DrawerContent>
        </Drawer>
    );
}
