import { Box, Heading, IconButton, Input, Highlight, Text } from '@chakra-ui/react';
import NavigationLayout from 'components/navLayout';
import { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { generateResponse } from '../config/openai';

const ChatPage = () => {
    const [inputText, setInputText] = useState('');
    const [chatLog, setChatLog] = useState<string[]>([]);
    const [showHeading, setShowHeading] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSendMessage = async () => {
        if (inputText.trim() === '') return;

        if (showHeading) setShowHeading(false);
        setChatLog((prevChatLog) => [...prevChatLog, `You: ${inputText}`]);
        setInputText('');
        const response = await generateResponse(inputText);
        setChatLog((prevChatLog) => [...prevChatLog, `Bot: ${response}`]);
    };

    const formatMessage = (message: string) => {
        return message.split('\n');
    };

    return (
        <NavigationLayout>
            <Box p={4} height='92%' display='flex' flexDir='column'>
                {showHeading && (
                    <>
                        <Heading size='lg' mb={4}>
                            Eva AI Assistant
                        </Heading>
                        <Text>
                            Welcome to Eva AI Assistant, your intelligent virtual assistant powered
                            by cutting-edge AI technology. Eva is here to make your life easier by
                            providing smart assistance for a wide range of tasks. Whether you need
                            help with scheduling, reminders, information retrieval, or simply
                            engaging in natural conversations,
                        </Text>
                    </>
                )}
                <Box flex='1 1 auto' overflowY='auto' pr={4}>
                    <Box height='100%' display='flex' flexDir='column' gap={6}>
                        {chatLog.map((message, index) => (
                            <Box
                                key={index}
                                textAlign={message.startsWith('You:') ? 'end' : 'start'}
                            >
                                {formatMessage(message).map((line, index) => (
                                    <Highlight
                                        key={index}
                                        query={message.startsWith('You:') ? 'You' : 'Bot'}
                                        styles={{ fontWeight: 'bold', color: '#fff' }}
                                    >
                                        {line}
                                    </Highlight>
                                ))}
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box w='100%' display='flex' pt={6}>
                    <Input
                        value={inputText}
                        onChange={handleInputChange}
                        placeholder='Type a message...'
                        flex='1'
                        mr={2}
                        sx={{ bg: '#fff', color: '#000' }}
                        _placeholder={{ color: '#999' }}
                    />
                    <IconButton aria-label='send' onClick={handleSendMessage} colorScheme='blue'>
                        <IoSend />
                    </IconButton>
                </Box>
            </Box>
        </NavigationLayout>
    );
};

export default ChatPage;
