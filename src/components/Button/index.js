import React from 'react';
import { func, oneOfType, arrayOf, node } from 'prop-types';

function Button({ onClick, children }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: func,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Button;
