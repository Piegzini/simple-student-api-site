import React from 'react';
import {
  Alert, AlertIcon, AlertTitle, Box, Flex,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function ErrorAlert({ title }) {
  return (
    <Flex width="100%" justifyContent="center" position="absolute" top={105} transition="1s">
      <Alert status="error" width="auto" borderRadius="5">
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
      </Alert>
    </Flex>

  );
}

ErrorAlert.propTypes = {
  title: PropTypes.string.isRequired,
};
