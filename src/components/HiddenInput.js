import React from 'react';

const HiddenInput = ({ register }) => {
  return (
    <div className="hidden-input">
      <input
        type="text"
        id="hidden-with-opacity"
        name="fileName"
        {...register('fileName')}
        readOnly
      />
      <input type="hidden" name="mineType" {...register('mineType')} readOnly />
      <input
        type="hidden"
        name="imageData"
        {...register('imageData')}
        readOnly
      />
    </div>
  );
};

export default HiddenInput;
