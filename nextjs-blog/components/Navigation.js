import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
// Next.js backend
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCurrentUser } from "../lib/hooks";

const Navigation = () => {
  // Next.js backend ---------------->>
  console.log("Navigation");
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [user, { mutate }] = useCurrentUser();

  async function onSubmit(e) {
    e.preventDefault();
    console.log("onSubmit - e.currentTarget", e.currentTarget);
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    };
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
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
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
        <img height="50px" width="50px" src="/images/logo.png"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/">
            <a>Home</a>
          </Link>
          ' '
          <Link href="Members">
            <a> Members </a>
          </Link>
          ' '
          <Link href="SignUp">
            <a>Sign-Up</a>
          </Link>
        </Nav>
        <Form onSubmit={onSubmit} inline>
          <FormControl
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="mr-sm-1"
          />
          <FormControl
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="mr-sm-1"
          />
          <Button type="submit" variant="success">
            Log In
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
