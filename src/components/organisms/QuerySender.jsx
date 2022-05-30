import React, { useState } from 'react';
import {
  Box, Button,
  Heading, Input, InputGroup, InputLeftAddon, InputRightAddon,
} from '@chakra-ui/react';
import axios from 'axios';
import QueryInput from '../molecules/QueryInput';
import ResultBoard from '../molecules/ResultBoard';
import MessageAlert from '../molecules/MessageAlert';

const apiAddress = 'https://simple-student-api.herokuapp.com/api/v1/';

function QuerySender() {
  const [isRequestPending, setRequestIsPending] = useState(false);
  const [token, setToken] = useState('');
  const [jsonData, setJsonData] = useState('');
  const [error, setError] = useState('');

  const sendApiRequest = async (endPoint) => {
    setRequestIsPending(true);
    setJsonData('');

    try {
      let { data } = await axios.get(`${apiAddress}${endPoint}`, {
        headers: { Authorization: token },
      });

      data = JSON.stringify(data, 'space', 2);
      setJsonData(data);
    } catch (e) {
      setError(e.message);
      setTimeout(() => setError(''), 1500);
    } finally {
      setRequestIsPending(false);
    }
  };

  return (
    <>
      { error ? <MessageAlert title={error} status="error" /> : null }

      <Box width="100vw" mt="16" display="flex" flexDirection="column" alignItems="center">
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
          <ResultBoard isPending={isRequestPending} jsonData={jsonData} />
        </Box>
      </Box>
    </>

  );
}

export default QuerySender;
