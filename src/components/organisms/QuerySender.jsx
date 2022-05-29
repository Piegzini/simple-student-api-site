import React, { useState } from 'react';
import {
  Box,
  Heading,
} from '@chakra-ui/react';
import axios from 'axios';
import QueryInput from '../molecules/QueryInput';
import ResultBoard from '../molecules/ResultBoard';
import MessageAlert from '../molecules/MessageAlert';

const apiAddress = 'https://simple-student-api.herokuapp.com/api/v1/';

function QuerySender() {
  const [isRequestPending, setRequestIsPending] = useState(false);
  const [jsonData, setJsonData] = useState('');
  const [error, setError] = useState('');

  const sendApiRequest = async (endPoint) => {
    setRequestIsPending(true);
    setJsonData('');

    try {
      let { data } = await axios.get(`https://simple-student-api.herokuapp.com/api/v1/${endPoint}`, {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API}` },
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
      <Box width="100vw" mt="20" display="flex" flexDirection="column" alignItems="center">
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
          <ResultBoard isPending={isRequestPending} jsonData={jsonData} />
        </Box>
      </Box>
    </>

  );
}

export default QuerySender;
