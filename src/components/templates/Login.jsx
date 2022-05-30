import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MessageAlert from '../atoms/MessageAlert/MessageAlert';
import Banner from '../atoms/Banner/Banner';
import { apiAddress } from '../../helpers/Consts';
import Form from '../organisms/Form/Form';

const headerText = 'Login to get your new access token!';
const inputsNames = ['username', 'password'];

export default function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const send = async (data) => {
    setError('');
    try {
      await axios.post(`${apiAddress}service/login`, { ...data });
      setSuccess(true);
      setTimeout(() => navigate('/', { replace: true }), 3000);
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      { success ? <MessageAlert title="Your token has been send to your email!" status="success" /> : null }
      { error ? <MessageAlert title={error} status="error" /> : null }

      <Banner text={headerText} />

      <Box width="100%" display="flex" justifyContent="center" mt="20">
        <Form inputsNames={inputsNames} submitAction={send} />
      </Box>

    </Box>

  );
}
