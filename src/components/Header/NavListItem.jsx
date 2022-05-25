import { NavLink } from 'react-router-dom';
import { ListItem, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

function NavListItem({ path, name }) {
  return (
    <ListItem>
      <NavLink to={path}>
        {({ isActive }) => (
          <Text
            fontSize={{ lg: 'lg', base: 'sm' }}
            fontWeight="semibold"
            color={isActive ? 'primary' : 'base'}
            userSelect="None"
            transition="0.3s"
            _hover={{
              color: 'primary',
              transform: 'scale(1.12)',
            }}
          >
            {name.toUpperCase()}
          </Text>
        )}
      </NavLink>
    </ListItem>
  );
}

NavListItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavListItem;
