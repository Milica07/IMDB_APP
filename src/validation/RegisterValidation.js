import * as Yup from "yup";

const LOGIN_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address!')
    .required('Required!'),
  password: Yup.string()
    .required('Required!')
    .matches('Passwords must match!')
    .min(8, 'Password must be 8 characters at least')
    .max(30)
});

export default LOGIN_SCHEMA