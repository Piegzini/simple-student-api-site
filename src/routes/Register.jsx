import React from 'react';
import {
  Box, Button, FormControl, FormLabel, Heading, Input,
} from '@chakra-ui/react';

function Register() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Box width="100%" mt="10">
        <Heading textAlign="center">Register to get full access token</Heading>
      </Box>

      <Box width="100%" display="flex" justifyContent="center" mt="20">
        <Box
          width="20%"
          display="flex"
          flexDirection="column"
          backgroundColor="#eee"
          padding="14"
          borderRadius="10"

        >
          <FormControl padding="4">
            <FormLabel htmlFor="username">Username </FormLabel>
            <Input id="username" type="username" />
          </FormControl>
          <FormControl padding="4">
            <FormLabel htmlFor="email">Email </FormLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl padding="4">
            <FormLabel htmlFor="password">Password </FormLabel>
            <Input id="password" type="password" />
          </FormControl>
          <Box mt="8" width="100%" display="flex" justifyContent="center">
            <Button width="50%" colorScheme="teal" size="md">
              Button
            </Button>
          </Box>

        </Box>

      </Box>

    </Box>

  );
}

export default Register;
