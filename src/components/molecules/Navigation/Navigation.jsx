import React from 'react';
import PropTypes from 'prop-types';
import { Flex, List } from '@chakra-ui/react';
import Navlistitem from '../../atoms/NavListItem/NavListItem';

function Navigation({ routes }) {
  return (
    <List width={['100%', '100%', '60%', '50%', '30%']}>
      <Flex width="100%" justifyContent="space-evenly">
        <Navlistitem path="/" name="Home" key="Home" />
        { routes.map((path) => <Navlistitem path={path} name={path} key={path} />) }
      </Flex>
    </List>
  );
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navigation;
