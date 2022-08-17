import React from 'react';

const Loading = ({ loading, success, setSuccess, setLoading }) => {
  const onRegistrtionSuccess = () => {
    setLoading(false);
    // set success to false after 1sec
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  };

  return (
    <div className={`${loading && 'show_loading'} loading`}>
      {!success && 'loading...'}

      {/* render this element when registration is successful */}
      {success && (
        <div className="success">
          <p>Registration Successful</p>

          <button type="button" onClick={onRegistrtionSuccess}>
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default Loading;
