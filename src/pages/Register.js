import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/auth/slice";

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { selectRegisterError } from "../store/auth/selectors";

import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().min(8, 'Password must be 8 characters at least').required('Required'),
  name: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
});

export default function Register(){
  const dispatch = useDispatch();
  const registerError = useSelector(selectRegisterError);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => dispatch(register(values)),
  });

    return (
        <Container>
          <h2 className="mb-4 mt-5">Register</h2>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className='col-4 offset-4 mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
              id='name'
              name='name'
              type='text'
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name && (
                <small className="form-text text-danger mt-2">{formik.errors.name}</small>
              )}
            </Form.Group>
            <Form.Group className='col-4 offset-4 mb-3'>
              <Form.Label>Email address</Form.Label>
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
              <Form.Label>Password</Form.Label>
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
            {registerError && (
              <small className="form-text text-danger mt-2" >User already exists</small>
            )}
            </Form>
            </Container>
    );
} 