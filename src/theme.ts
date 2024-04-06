import { ThemeConfig, extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const colors = {
    bg: {
        default: '#0097FD',
    },
    text: {
        primary: '#FFFFFF',
    },
    brand: {
        100: '#0097FD',
        200: '#0097FD',
    },
};

const styles = {
    global: {
        body: {
            bg: 'bg.default',
            color: 'text.primary',
            overflowX: 'hidden',
        },
    },
};

const theme = extendTheme({
    config,
    styles,
    colors,
});

export { theme };
