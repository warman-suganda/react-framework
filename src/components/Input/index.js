import React from 'react';
import { func, string, oneOf } from 'prop-types';

function Input({ type, name, onClick }) {
  return <input type={type} name={name} onClick={onClick} />;
}

Input.propTypes = {
  onClick: func,
  name: string.isRequired,
  type: oneOf(['text', 'password', 'email']),
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
