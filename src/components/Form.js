import Input from './Input';
import Select from './Select';
import chapter from '../data/chapterData';
import zone from '../data/zoneData';
import { useState } from 'react';
import usePayWithPayStack from '../hooks/usePayWithPayStack';
import useSaveToServer from '../hooks/useSaveToServer';
import placeholderImage from '../assets/passport.png';
import schema from '../schema/schema';
import useFormValidation from '../hooks/useFormValidation';
import UploadImage from './UploadImage';
import Loading from './Loading';

const Form = () => {
  // states
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // form validation custom hook
  const { errors, handleSubmit, register, setValue, watch } =
    useFormValidation(schema);

  //   paystach payment custom hook
  const initializePayment = usePayWithPayStack(watch);

  // save to server custom hook
  const postData = useSaveToServer();

  //funtiom to load that and get necessary details
  const readImageFile = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();
    if (file) {
      fileReader.onload = () => {
        setValue('fileName', file.name);
        setValue('mineType', file.type);
        setValue('imageData', fileReader.result.split(',')[1]);
        setImage(URL.createObjectURL(file));
      };

      fileReader.readAsDataURL(file);
    }
  };

  // you can call this function anything
  const onClose = () => {
    // remove loading state
    setLoading(false);
  };

  const createPayment = (data, e) => {
    // set show loading spinner
    setLoading(true);

    // initialize paystack payment after 7 miliseconds
    setTimeout(() => {
      initializePayment(onSuccess, onClose);
    }, 700);

    // function is called when payment is successful
    function onSuccess(response) {
      postData(setSuccess, setImage, setLoading, e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(createPayment)}>
        <UploadImage
          errors={errors}
          readImageFile={readImageFile}
          register={register}
          placeholderImage={placeholderImage}
          image={image}
        />

        <section>
          <Input
            name={'name'}
            label={'Name'}
            type={'text'}
            {...register('name')}
            errors={errors}
          />

          <Input
            name={'surname'}
            label={'Surname'}
            type={'text'}
            {...register('surname')}
            errors={errors}
          />

          <Select
            data={zone}
            name={'zone'}
            {...register('zone')}
            errors={errors}
          />
        </section>

        <section>
          <Select
            data={chapter}
            name={'chapter'}
            {...register('chapter')}
            errors={errors}
          />

          <Input
            name={'email'}
            label={'Email'}
            type={'email'}
            {...register('email')}
            errors={errors}
          />

          <Input
            name={'phone'}
            label={'Mobile number'}
            type={'text'}
            {...register('mobile_number')}
            errors={errors}
          />
        </section>

        <section>
          <Input
            name={'position'}
            label={'Position'}
            type={'text'}
            {...register('position')}
            errors={errors}
          />

          <Input
            name={'next_of_kin_name'}
            label={'Next of Kin Name'}
            type={'text'}
            {...register('next_of_kin_name')}
            errors={errors}
          />

          <Input
            name={'next_of_kin_number'}
            label={'Next of Kin Number'}
            type={'text'}
            {...register('next_of_kin_number')}
            errors={errors}
          />
        </section>

        <button type="submit" className="pay">
          Pay & submit
        </button>
      </form>

      {/* loading spinner */}
      <Loading
        loading={loading}
        success={success}
        setLoading={setLoading}
        setSuccess={setSuccess}
      />
    </>
  );
};

export default Form;
