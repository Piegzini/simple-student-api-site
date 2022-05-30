import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import Navigation from '../../molecules/Navigation/Navigation';

const routes = ['Register', 'Login'];
function Header() {
  return (
    <header>
      <Flex mx={{ base: '10%', lg: '15%', xl: '20%' }} mt={4} justifyContent="space-between">
        <Heading size={{ base: 'sm', lg: 'md' }} fontWeight="bold" letterSpacing="1.5px"> SIMPLE STUDENT API </Heading>
        <Navigation routes={routes} />
      </Flex>

    </header>
  );
}

export default Header;
