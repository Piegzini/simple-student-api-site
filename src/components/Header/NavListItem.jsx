import { NavLink } from 'react-router-dom';
import { ListItem, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

function NavListItem({ path }) {
  return (
    <ListItem>
      <NavLink to={path}>
        <Text fontSize={{ lg: 'lg', base: 'sm' }} fontWeight="semibold" userSelect="None" transition="0.3s" _hover={{ color: 'primary', transform: 'scale(1.12)' }}>
          {path.toUpperCase()}
        </Text>
      </NavLink>
    </ListItem>
  );
}

NavListItem.propTypes = {
  path: PropTypes.string.isRequired,
};

export default NavListItem;
