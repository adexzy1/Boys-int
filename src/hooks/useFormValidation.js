import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const useFormValidation = (schema) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });

  return { errors, handleSubmit, register, setValue, watch };
};

export default useFormValidation;
