import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Header() {
  return (
    <header>
      <Box d="flex" alignItems="center" justifyContent="space-between" ml={12} mr={6}>
        <Box>
          <Text fontSize="lg"> Simple Student API </Text>
        </Box>
        <Box />
      </Box>
    </header>
  );
}

export default Header;
