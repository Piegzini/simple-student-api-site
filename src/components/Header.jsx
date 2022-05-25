import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Header() {
  return (
    <header>
      <Box width="60%" d="flex" alignItems="center" justifyContent="space-between" ml={12} mr={6}>
        <Box>
          <Text fontSize="xl"> SIMPLE STUDENT API </Text>
        </Box>
        <Box />
      </Box>
    </header>
  );
}

export default Header;
