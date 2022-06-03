import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MOVIE_GENRES } from '../components/movies'

import { getGenres, createMovie } from '../store/movies/slice';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  title: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
  description: Yup.string().max(500, 'Must be 500 characters or less').required('Required'),
  cover_image_url: Yup.string().max(500, 'Must be 500 characters or less'),
  genre: Yup.string().required('Required'),
});

const CreateMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      cover_image_url: '',
      genre: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(createMovie(values));
    },
  });

  const getOptions = () => {
    const defaultOption = [
      <option key="Any" value="">
        Any genre
      </option>,
    ];
    return defaultOption.concat(
        Object.keys(MOVIE_GENRES).map((genre) => {
        return (
          <option key={genre} value={genre}>
            {MOVIE_GENRES[genre]}
          </option>
        );
      }),
    );
  };

  return (
    <Container>
      <h2 className="mb-4 mt-5">Create a movie</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="col-4 offset-4 mb-3">
          <Form.Label>Movie title</Form.Label>
          <Form.Control
            id="title"
            name="title"
            type="text"
            placeholder="Enter movie title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.touched.title && formik.errors.title && (
            <small className="form-text text-danger">{formik.errors.title}</small>
          )}
        </Form.Group>
        <Form.Group className="col-4 offset-4 mb-3">
          <Form.Label>Movie description</Form.Label>
          <Form.Control
            id="description"
            name="description"
            as="textarea"
            rows={3}
            placeholder="Enter movie description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          {formik.touched.description && formik.errors.description && (
            <small className="form-text text-danger">{formik.errors.description}</small>
          )}
        </Form.Group>
        <Form.Group className="col-4 offset-4 mb-3">
          <Form.Label>Cover</Form.Label>
          <Form.Control
            id="cover_image_url"
            name="cover_image_url"
            type="text"
            placeholder="Cover image link"
            value={formik.values.cover_image_url}
            onChange={formik.handleChange}
          />
          {formik.touched.cover_image_url && formik.errors.cover_image_url && (
            <small className="form-text text-danger">{formik.errors.cover_image_url}</small>
          )}
        </Form.Group>
        <Form.Group className="col-4 offset-4 mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Select
            id="genre"
            name="genre"
            className="shadow-none"
            value={formik.values.genre}
            onChange={formik.handleChange}
          >
            {getOptions()}
          </Form.Select>
          {formik.touched.genre && formik.errors.genre && (
            <small className="form-text text-danger">{formik.errors.genre}</small>
          )}
        </Form.Group>
        <Button variant="success" type="submit">
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default CreateMovie;