import { usePaystackPayment } from 'react-paystack';

const usePayWithPayStack = (watch) => {
  // get the email with react-hook-form hook
  const email = watch('email');

  const config = {
    email: email,
    amount: 10000 * 100,
    publicKey: 'pk_test_44b638f039c3501561ec76ef7fa4c1a1b3a2f70e',
  };

  const intializePayment = usePaystackPayment(config);

  return intializePayment;
};

export default usePayWithPayStack;
