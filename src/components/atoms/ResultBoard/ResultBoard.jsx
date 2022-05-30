import { Flex, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

export default function ResultBoard({ isPending, jsonData }) {
  return (
    <>
      { isPending ? (
        <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Text as="pre">
          { jsonData }
        </Text>
      ) }
    </>

  );
}

ResultBoard.propTypes = {
  isPending: PropTypes.bool.isRequired,
  jsonData: PropTypes.string.isRequired,
};
