import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

function FormElement({ register, name }) {
  return (
    <FormControl padding="4">
      <FormLabel htmlFor={name}>
        {name}
      </FormLabel>
      <Input id={name} type={name} {...register(`${name}`)} required />
    </FormControl>
  );
}

FormElement.propTypes = {
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormElement;
