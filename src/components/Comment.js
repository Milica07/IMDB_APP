import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getComments, postComment } from '../store/movies/slice';
import { selectCommentsCount, selectMovieComments } from "../store/movies/selectors";
import { useParams } from 'react-router-dom';

const validationSchema = Yup.object({
  content: Yup.string()
    .max(500, 'Comment must be 500 characters or less!')
    .required("You can't post an empty comment!"),
});

const Comment = ({movie}) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectMovieComments);
  const pathParams = useParams();
  const [commentsLimit, setCommentsLimit] = useState(0);
  const commentsCount = useSelector(selectCommentsCount);

  useEffect(() => {
    dispatch(getComments());
  }, 
  [dispatch]);

  const formik = useFormik({
    initialValues: {
      content: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(postComment({ id: movie.id, content: values.content }));
      values.content = ''
    },
  });

  const [params, setParams] = useState({ id: movie.id, limit: 10 });

  const handlePaginate = () => {
    const newParams = { ...params, limit: params.limit + 5 };
    dispatch(getComments(newParams));
    setParams(newParams);
    setCommentsLimit(params.limit + 5)
  };

  return (
    <Card style={{ maxWidth: '100%', marginBottom: '50px', border: '0px' }}>
      <ListGroup
        style={{ border: '1px solid lightblue', textAlign: 'left' }}>
          <div>
          {comments?.length > 0 ? (
            comments.map((comment) => (         
                <ListGroupItem key={comment.id}>
                <small>
                <b>{comment.username}&nbsp;</b>
                </small>
                <small>{comment.content}</small>
                </ListGroupItem>))
          ) : (
          <small>No comments</small>)}
          </div>
      </ListGroup>
      { commentsLimit < commentsCount && <Button className="shadow-none" variant="secondary" 
      onClick={handlePaginate}>Show more</Button> }
      <Form onSubmit={formik.handleSubmit}>
        <Form.Control
          id="content"
          name="content"
          as="textarea"
          row={3}
          className="shadow-none"
          placeholder="Comment here..."
          style={{ borderTop: '0px' }}
          value={formik.values.content}
          onChange={formik.handleChange}
        />
        <Button className="shadow-none" variant="success" type="submit">Post</Button>
        {formik.touched.content && formik.errors.content && (
          <div className="form-text text-danger mt-2">{formik.errors.content}</div>
        )}
      </Form>
      <Row></Row>
    </Card>
  );
};

export default Comment;