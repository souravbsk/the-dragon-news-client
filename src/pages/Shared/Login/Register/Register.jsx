import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useState } from "react";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [checked,setChecked] = useState(false);

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result => {
            const currentUser = result.user;
            console.log(currentUser);
        })
        .catch(err => {
            console.log(err.message);
        })
    }


const handleChecked = (e) => {
    const checkedValue = e.target.checked;
    setChecked(checkedValue)
}


  return (
    <Container className="w-25 mx-auto mt-3">
      <h3>Please Register</h3>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Phot Url" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
          onClick={handleChecked}
           type="checkbox" 
           name="accept"
            label={<>Accepts <Link className="btn btn-link" to='/terms'>Terms and Condition</Link></>} />
        </Form.Group>
        <Button disabled={!checked} variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already Have an Account? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
