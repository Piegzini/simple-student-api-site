import React from 'react';
import {
  Flex, Heading, List, ListItem, Text,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Flex mx="20%" mt={4} justifyContent="space-between">
        <Heading size="m" fontWeight="bold" letterSpacing="1.5px"> SIMPLE STUDENT API </Heading>
        <List width="25%">
          <Flex width="100%" justifyContent="space-evenly">
            <ListItem>
              <NavLink to="register"><Text fontWeight="semibold" transition="0.3s" _hover={{ color: 'primary', transform: 'scale(1.12)' }}>HOME</Text></NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="register"><Text fontWeight="semibold" transition="0.3s" _hover={{ color: 'primary', transform: 'scale(1.12)' }}>REGISTER</Text></NavLink>

            </ListItem>
            <ListItem>
              <NavLink to="register"><Text fontWeight="semibold" transition="0.3s" _hover={{ color: 'primary', transform: 'scale(1.12)' }}>LOGIN</Text></NavLink>
            </ListItem>
          </Flex>
        </List>

      </Flex>

    </header>
  );
}

export default Header;
