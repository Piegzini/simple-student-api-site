import React from 'react';
import {
  Alert, AlertIcon, AlertTitle, Flex,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function MessageAlert({ title, status }) {
  return (
    <Flex width="100%" justifyContent="center" position="absolute" top={105} transition="1s">
      <Alert status={status} width="auto" borderRadius="5">
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
      </Alert>
    </Flex>

  );
}

MessageAlert.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,

};
