import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MessageAlert from '../molecules/MessageAlert';
import Banner from '../atoms/Banner';

const headerText = 'Login to get your new access token!';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const send = async (data) => {
    setError('');
    try {
      await axios.post('https://simple-student-api.herokuapp.com/service/login', { ...data });
      setSuccess(true);
      setTimeout(() => navigate('/', { replace: true }), 3000);
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      { success ? <MessageAlert title="Your token has been send to your email!" status="success" /> : null }

      <Banner text={headerText} />

      <Box width="100%" display="flex" justifyContent="center" mt="20">
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
              login
            </Button>
          </Flex>
        </Box>

      </Box>

    </Box>

  );
}
