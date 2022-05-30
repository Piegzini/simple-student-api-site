import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import NavListItem from '../molecules/NavListItem';

function Banner({ text }) {
  return (
    <Box mt="6">
      <Heading as="h1" size="xl" textAlign="center">
        {text}
      </Heading>
    </Box>
  );
}

Banner.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Banner;
