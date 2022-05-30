import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MessageAlert from '../molecules/MessageAlert';
import Banner from '../atoms/Banner';

const headerText = 'Register to get full access token!';

function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const send = async (data) => {
    setError('');
    try {
      await axios.post('https://simple-student-api.herokuapp.com/service/register', { ...data });
      setSuccess(true);
      setTimeout(() => navigate('/login', { replace: true }), 5000);
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  return (
    <>
      { success ? <MessageAlert title="Well Done, your account has been created, You will be navigate to login page" status="success" /> : null }
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Banner text={headerText} />

        <Box width="100%" display="flex" justifyContent="center" mt="12">
          <Box
            as="form"
            minWidth="250px"
            width={{ base: '30%', lg: '20%', xl: '15%' }}
            display="flex"
            flexDirection="column"
            backgroundColor="gray.light"
            padding="1"
            borderRadius="10"
            borderColor="white"
            onSubmit={handleSubmit(send)}

          >
            <FormControl padding="4">
              <FormLabel htmlFor="username">Username </FormLabel>
              <Input id="username" type="username" {...register('username')} required />
            </FormControl>
            <FormControl padding="4">
              <FormLabel htmlFor="email">Email </FormLabel>
              <Input id="email" type="email" {...register('email')} required />
            </FormControl>
            <FormControl padding="4">
              <FormLabel htmlFor="password">Password </FormLabel>
              <Input id="password" type="password" {...register('password')} required />
              {error ? (
                <FormHelperText color="red.300">
                  { error }
                </FormHelperText>
              ) : null }
            </FormControl>
            <Flex mt="4" mb="4" width="100%" display="flex" justifyContent="center">
              <Button type="submit" width="40%" colorScheme="whatsapp" size="md">
                Register
              </Button>
            </Flex>

          </Box>

        </Box>

      </Box>
    </>

  );
}

export default Register;
