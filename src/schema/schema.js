import * as yup from 'yup';

const schema = yup.object().shape({
  fileName: yup.string().required('Please upload a passport'),
  mineType: yup.string().required(),
  imageData: yup.string().required(),
  name: yup.string().required('Name is Required').uppercase(),
  surname: yup.string().required('Surname is Required').uppercase(),
  mobile_number: yup
    .string()
    .required('Mobile Number is Required')
    .min(11, 'Enter a valid Mobile Number')
    .max(14, 'Enter a valid Mobile Number'),
  zone: yup.string().required('Zone is Required').uppercase(),
  email: yup
    .string()
    .required('Email is Required')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Enter a valid Email'
    )
    .uppercase(),
  chapter: yup.string().required('Chapter is Required').uppercase(),
  position: yup.string().required('Chapter is Required').uppercase(),
  next_of_kin_name: yup
    .string()
    .required('Next of kin name is Required')
    .uppercase(),
  next_of_kin_number: yup
    .string()
    .required('Next of kin number is Required')
    .min(11, 'Enter a valid Mobile Number')
    .max(14, 'Enter a valid Mobile Number'),
});

export default schema;
