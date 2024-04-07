import { Box, Button, Checkbox, Heading } from '@chakra-ui/react';
import TextField from 'components/textField';
import PageLayout from 'components/ui/pageLayout';
import { useForm } from 'react-hook-form';
import tatraLogo from '../assets/tatra-logo.png';
import { useNavigate } from 'react-router-dom';

interface FormValues {
    PID: string;
}

const LoginPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({ mode: 'onChange' });

    const onSubmit = async (data: FormValues) => {
        console.log(data);
        navigate('/dashboard');
    };

    return (
        <PageLayout>
            <Box pb={10} display='flex' justifyContent='center'>
                <img src={tatraLogo} alt='logo' />
            </Box>
            <Box
                as='form'
                display='flex'
                flexDirection='column'
                gap={3}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Heading fontWeight={100} pb={10}>
                    Login to Tatra Investments
                </Heading>
                <TextField
                    name='PID'
                    type='password'
                    placeholder='Your PID'
                    register={register('PID', {
                        required: '*This field is required',
                        minLength: {
                            value: 6,
                            message: '*PID must be at least 6 numbers long',
                        },
                    })}
                    errors={errors}
                />

                <Checkbox pt={4}>Remember me</Checkbox>
                <Button
                    colorScheme='brand'
                    isLoading={isSubmitting}
                    color='text.primary'
                    fontWeight='400'
                    type='submit'
                    mt={5}
                >
                    Login
                </Button>
            </Box>
        </PageLayout>
    );
};

export default LoginPage;
