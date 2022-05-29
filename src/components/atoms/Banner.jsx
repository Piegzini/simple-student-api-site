import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

function Banner() {
  return (
    <Box mt="6">
      <Heading as="h1" size="xl" textAlign="center">
        Welcome to Simple Student API
      </Heading>
    </Box>
  );
}

export default Banner;
