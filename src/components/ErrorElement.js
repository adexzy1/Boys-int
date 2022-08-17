const ErrorElement = ({ errors, name }) => {
  return <p className="error">{errors[name].message}</p>;
};

export default ErrorElement;
