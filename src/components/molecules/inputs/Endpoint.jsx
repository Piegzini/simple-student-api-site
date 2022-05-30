import {
  Button, Input, InputGroup, InputLeftAddon, InputRightAddon,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Endpoint({ preset, submit }) {
  const [endPoint, setEndPoint] = useState('books/');
  return (
    <InputGroup size="m" width="100%">
      <InputLeftAddon px="3" children={preset} backgroundColor="primary" />
      <Input
        px="2"
        minWidth="100px"
        value={endPoint}
        onChange={(e) => setEndPoint(e.target.value)}
      />
      <InputRightAddon backgroundColor="primary">
        <Button
          borderRadius="0"
          onClick={() => submit(endPoint)}
          backgroundColor="transparent"
        >
          Submit
        </Button>
      </InputRightAddon>
    </InputGroup>
  );
}

Endpoint.propTypes = {
  preset: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
};
