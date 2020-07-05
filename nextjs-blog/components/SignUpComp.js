import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormText from "react-bootstrap/FormText";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
// Next.js backend
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCurrentUser } from "../lib/hooks";

const SignUpForm = () => {
  // Next.js backend ---------------->>
  console.log("SignUpForm");
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [user, { mutate }] = useCurrentUser();
  // redirect to home if user is authenticated
  console.log('is users Authenticated? if yes , redirect to home');
  if (user) router.push("/");

  async function onSubmit(e) {
    e.preventDefault();
    console.log("onSubmit - e.currentTarget", e.currentTarget);
    console.log('e.currentTarget.first_name', e.currentTarget.first_name.value )
    console.log('e.currentTarget.last_name', e.currentTarget.last_name.value )
    const body = {
      first_name: e.currentTarget.first_name.value,
      last_name: e.currentTarget.last_name.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    };
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
      if (user) router.push("/");
    } else {
      setErrorMsg("Incorrect username or password. Try again!");
      console.log("Navigation onSubmit", errorMsg);
    }
  }
  // Next.js backend <<----------------

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <FormGroup controlId="formBasicFirstName">
          <FormLabel>First Name</FormLabel>
          <FormControl type="text" name="first_name" placeholder="First Name" />
        </FormGroup>

        <FormGroup controlId="formBasicLastName">
          <FormLabel>Last Name</FormLabel>
          <FormControl type="text" name="last_name" placeholder="Last Name" />
        </FormGroup>

        <FormGroup controlId="formBasicEmail">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" name="email" placeholder="Enter email" />
          <FormText className="text-muted">
            We'll never share your email with anyone else.
          </FormText>
        </FormGroup>

        <FormGroup controlId="formBasicPassword">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" name="password" placeholder="Password" />
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck type="checkbox" name="save" label="Save my password" />
        </FormGroup>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignUpForm;
