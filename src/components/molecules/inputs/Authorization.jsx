import {
  Box, Input, InputGroup, InputLeftAddon,
} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

function Authorization({ token, setToken }) {
  return (
    <Box width="40%" mt="10" display="flex" justifyContent="center" maxWidth="500px">
      <InputGroup size="m" width="100%">
        <InputLeftAddon px="3" children="Authorization token" backgroundColor="primary" padding="8px" />
        <Input
          value={token}
          onChange={(e) => setToken(e.target.value)}
          px="2"
          minWidth="100px"
        />
      </InputGroup>
    </Box>
  );
}

Authorization.propTypes = {
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired,
};

export default Authorization;
