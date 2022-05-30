import * as Yup from "yup";

const LOGIN_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address!')
    .required('Required!'),
  password: Yup.string()
    .required('Required!')
    .min(8, 'Password must be 8 characters at least')
});

export default LOGIN_SCHEMA