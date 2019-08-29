import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

function Create(props) {
  const [product, setProduct] = useState({ _id: '', prod_name: '', prod_desc: '', prod_price: 0 });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/api/v1/products";

  const saveProduct = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = { prod_name: product.prod_name, prod_desc: product.prod_desc, prod_price: parseInt(product.prod_price) };
    axios.post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        props.history.push('/show/' + result.data._id)
      }).catch((error) => setShowLoading(false));
  };

  const onChange = (e) => {
    e.persist();
    setProduct({...product, [e.target.name]: e.target.value});
  }

  return (
    <div>
      {showLoading && 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> 
      } 
      <Jumbotron>
        <Form onSubmit={saveProduct}>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" name="prod_name" id="prod_name" placeholder="Enter product name" value={product.prod_name} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" name="prod_desc" id="prod_desc" rows="3" placeholder="Enter product description" value={product.prod_desc} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="number" name="prod_price" id="prod_price" placeholder="Enter product price" value={product.prod_price} onChange={onChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default withRouter(Create);
