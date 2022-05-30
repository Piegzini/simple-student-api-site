import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import FormElement from '../../molecules/FormElement/FormElement';

function Form({ inputsNames, submitAction }) {
  const { register, handleSubmit } = useForm();

  return (
    <Box
      as="form"
      minWidth="250px"
      width={{ base: '30%', lg: '20%', xl: '15%' }}
      display="flex"
      flexDirection="column"
      backgroundColor="gray.light"
      padding="1"
      borderRadius="10"
      borderColor="white"
      onSubmit={handleSubmit(submitAction)}

    >
      {inputsNames.map((name) => <FormElement name={name} register={register} />)}

      <Flex mt="4" mb="4" width="100%" display="flex" justifyContent="center">
        <Button type="submit" width="40%" colorScheme="whatsapp" size="md">
          login
        </Button>
      </Flex>
    </Box>
  );
}

Form.propTypes = {
  submitAction: PropTypes.func.isRequired,
  inputsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Form;
