import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box, Button, Flex, FormControl, FormLabel, Heading, Input,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const send = async (data) => {
    try {
      const { statusCode, message } = await axios.post('/service/login', {
        ...data,
      });
      navigate('/', { replace: true });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Box width="100%" mt="10">
        <Heading textAlign="center">Register to get full access token</Heading>
      </Box>

      <Box width="100%" display="flex" justifyContent="center" mt="20">
        <Box
          as="form"
          minWidth="200px"
          width={{ base: '25%', xl: '15%' }}
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
