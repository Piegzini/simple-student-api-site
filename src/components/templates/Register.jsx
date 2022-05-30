import React, { useState } from 'react';
import {
  Box,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MessageAlert from '../atoms/MessageAlert/MessageAlert';
import Banner from '../atoms/Banner/Banner';
import { apiAddress } from '../../helpers/Consts';
import Form from '../organisms/Form/Form';

const headerText = 'Register to get full access token!';
const inputsNames = ['username', 'email', 'password'];

function Register() {
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const send = async (data) => {
    setError('');
    try {
      await axios.post(`${apiAddress}service/register`, { ...data });
      setSuccess(true);
      setTimeout(() => navigate('/login', { replace: true }), 5000);
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      { success ? <MessageAlert title="Well Done, your account has been created, You will be navigate to login page" status="success" /> : null }
      { error ? <MessageAlert title={error} status="error" /> : null }

      <Banner text={headerText} />

      <Box width="100%" display="flex" justifyContent="center" mt="12">
        <Form inputsNames={inputsNames} submitAction={send} />
      </Box>

    </Box>

  );
}

export default Register;
