import { forwardRef } from 'react';
import ErrorElement from './ErrorElement';

const Input = forwardRef((prop, ref) => {
  const { name, label, type, errors, ...otherProps } = prop;
  return (
    <div className={`${errors[name] ? 'input_box_error' : ''} input_group`}>
      <input
        type={type}
        name={name}
        {...otherProps}
        placeholder={' '}
        ref={ref}
      />
      <label htmlFor={name}>{label}</label>
      {errors[name] && <ErrorElement name={name} errors={errors} />}
    </div>
  );
});

export default Input;
