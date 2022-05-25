import React from 'react';
import { Flex, Heading, List } from '@chakra-ui/react';
import Navlistitem from './NavListItem';

const routes = ['Home', 'Register', 'Login'];
function Header() {
  return (
    <header>
      <Flex mx={{ base: '10%', lg: '15%', xl: '20%' }} mt={4} justifyContent="space-between">
        <Heading size={{ base: 'sm', lg: 'md' }} fontWeight="bold" letterSpacing="1.5px"> SIMPLE STUDENT API </Heading>

        <List width={['100%', '100%', '60%', '50%', '30%']}>
          <Flex width="100%" justifyContent="space-evenly">
            { routes.map((path) => <Navlistitem path={path} />) }
          </Flex>
        </List>
      </Flex>

    </header>
  );
}

export default Header;
