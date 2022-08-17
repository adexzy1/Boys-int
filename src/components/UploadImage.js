import ErrorElement from './ErrorElement';
import HiddenInput from './HiddenInput';

const UploadImage = ({
  image,
  placeholderImage,
  readImageFile,
  register,
  errors,
}) => {
  return (
    <div className="image_upload_container">
      <HiddenInput register={register} />
      <img
        src={image ? image : placeholderImage}
        alt="passport"
        className="passport"
      />

      <input
        name={'passport'}
        label={'Passport'}
        type={'file'}
        id="passport"
        onChange={readImageFile}
        accept={'image/*'}
        placeholder="upload Passport"
      />
      <label htmlFor="passport" className="passport_label">
        Upload Passport
      </label>

      {errors.fileName && <ErrorElement errors={errors} name={'fileName'} />}
    </div>
  );
};

export default UploadImage;
