import React, { useState } from 'react';
import {
  Box, Button,
  Heading, Input, InputGroup, InputLeftAddon, InputRightAddon,
} from '@chakra-ui/react';
import axios from 'axios';
import Endpoint from '../../molecules/inputs/Endpoint';
import ResultBoard from '../../atoms/ResultBoard/ResultBoard';
import MessageAlert from '../../atoms/MessageAlert/MessageAlert';
import Authorization from '../../molecules/inputs/Authorization';

const apiAddress = 'https://simple-student-api.herokuapp.com/api/v1/';

function ApiQueryPreview() {
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
      {/* error alert */}
      { error ? <MessageAlert title={error} status="error" /> : null }

      <Box width="100vw" mt="16" display="flex" flexDirection="column" alignItems="center">
        <Authorization token={token} setToken={setToken} />
        <Box width="50%" mt="10" display="flex" justifyContent="center" maxWidth="700px">
          <Endpoint preset={apiAddress} submit={sendApiRequest} />
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

export default ApiQueryPreview;
