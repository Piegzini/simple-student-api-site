import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';

const apiAddress = 'http://localhost:4000/api/v1/';

function Example() {
  const [endPoint, setEndPoint] = useState('books/');
  const [respondeData, setResondeData] = useState();

  const sendApiRequest = async () => {
    try {
      const { data } = await axios.get(`${apiAddress}${endPoint}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
        },
      });
      console.log(JSON.stringify(data, 'space', 2));
      setResondeData(JSON.stringify(data, 'space', 2));
    } catch (e) {
      console.error(e);
    }
  };

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
            <InputLeftAddon px="3" children={apiAddress} />
            <Input
              px="2"
              minWidth="100px"
              placeholder={endPoint}
              value={endPoint}
              onChange={(e) => setEndPoint(e.target.value)}
            />
            <InputRightAddon>
              <Button borderRadius="0" onClick={sendApiRequest}> Submit </Button>
            </InputRightAddon>
          </InputGroup>
        </Box>
        <Box />
      </Box>
      <Box width="30%" height="500px" backgroundColor="#E0E0E0" mt="12" overflowY="scroll">
        <Text fontSize="sm">
          <pre>
            {respondeData}
          </pre>
        </Text>

      </Box>
    </Box>

  );
}

export default Example;
