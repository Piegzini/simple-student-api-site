import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/react';

const apiAddres = 'http://localhost:3000/api/v1/';

function Example() {
  const [endPoint, setEndPoint] = useState('');
  // const sendApiRequest = async () => {
  //
  // };

  return (
    <Box width="100vw" mt="20" display="flex" flexDirection="column" alignItems="center">
      <Box width="50%">
        <Heading as="h2" textAlign="center">
          Try it now!
        </Heading>
      </Box>
      <Box width="50%" mt="10" display="flex" justifyContent="center">
        <Box width="100%" maxWidth="700px">
          <InputGroup size="m" width="100%" onChange={() => console.log(endPoint)}>
            <InputLeftAddon px="3" children={apiAddres} />
            <Input
              px="2"
              minWidth="100px"
              placeholder="students/"
              onChange={(e) => setEndPoint(e.target.value)}
            />
            <InputRightAddon>
              <Button borderRadius="0"> Submit </Button>
            </InputRightAddon>
          </InputGroup>
        </Box>
        <Box />
      </Box>
    </Box>

  );
}

export default Example;
