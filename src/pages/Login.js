import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/slice";

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { selectLoginError } from "../store/auth/selectors";

import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const validationSchema = Yup.object({
  email: Yup.string().max(50).email('Invalid email format').required('Required'),
  password: Yup.string().min(8, "Password must be 8 characters at least").required('Required'),
})

export default function Login(){
    const dispatch = useDispatch();
    const loginError = useSelector(selectLoginError);
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => dispatch(login(values)),
    });

    return (
        <Container>
          <h2 className="mb-4 mt-5">Login</h2>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className='col-4 offset-4 mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
              id='email'
              name='email'
              type='text'
              placeholder="Email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <small className="form-text text-danger mt-2" >{formik.errors.email}</small>
              )}
            </Form.Group>
            <Form.Group className='col-4 offset-4 mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
              id='password'
              name='password'
              type='password'
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password && (
                <small className="form-text text-danger mt-2" >{formik.errors.password}</small>
              )}
            </Form.Group>
            <Button variant="success" type="submit">Login</Button>
            {loginError && (
              <small className="form-text text-danger mt-2">Try again</small>
            )}
            </Form>
            </Container>
      );
}