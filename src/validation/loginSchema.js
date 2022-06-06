import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('Not a valid email').required('Type your email address'),
  password: yup.string().required('Type your password'),
});

export default schema;
