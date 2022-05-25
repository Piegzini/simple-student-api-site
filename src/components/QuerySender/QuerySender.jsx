import React, { useState } from 'react';
import {
  Box,
  Heading,

  Text,
  Spinner, Flex,
} from '@chakra-ui/react';
import axios from 'axios';
import QueryInput from './QueryInput';
import ResultBoard from './ResultBoard';

const apiAddress = 'http://localhost:4000/api/v1/';

function QuerySender() {
  const [isRequestPending, setRequestIsPending] = useState(false);
  const [responseJson, setResponseJson] = useState();

  const sendApiRequest = async (endPoint) => {
    setRequestIsPending(true);

    try {
      let { data } = await axios.get(`${apiAddress}${endPoint}`, {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
      });

      data = JSON.stringify(data, 'space', 2);
      setResponseJson(data);
    } catch (e) {
      setResponseJson(' ');
      console.error(e);
    } finally {
      setRequestIsPending(false);
    }
  };

  return (
    <Box width="100vw" mt="16" display="flex" flexDirection="column" alignItems="center">
      <Box width="50%">
        <Heading as="h2" textAlign="center">Try it now!</Heading>
      </Box>
      <Box width="50%" mt="10" display="flex" justifyContent="center" maxWidth="700px">
        <QueryInput preset={apiAddress} submit={sendApiRequest} />
      </Box>
      <Box
        width="30%"
        height="500px"
        backgroundColor="gray.900"
        mt="12"
        overflowY="auto"
        borderRadius="4"
        fontSize="sm"
      >
        <ResultBoard isPending={isRequestPending} jsonData={responseJson} />

      </Box>
    </Box>

  );
}

export default QuerySender;
