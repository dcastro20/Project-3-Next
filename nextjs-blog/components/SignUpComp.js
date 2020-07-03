import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormText from "react-bootstrap/FormText";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";

const SignUpForm = () => {
  return (
    <Container>
      <Form>
        <FormGroup controlId="formBasicFirstName">
          <FormLabel>First Name</FormLabel>
          <FormControl type="text" placeholder="First Name" />
        </FormGroup>

        <FormGroup controlId="formBasicLastName">
          <FormLabel>Last Name</FormLabel>
          <FormControl type="text" placeholder="Last Name" />
        </FormGroup>

        <FormGroup controlId="formBasicEmail">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="Enter email" />
          <FormText className="text-muted">
            We'll never share your email with anyone else.
          </FormText>
        </FormGroup>

        <FormGroup controlId="formBasicPassword">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup controlId="formBasicCheckbox">
          <FormCheck type="checkbox" label="Save my password" />
        </FormGroup>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignUpForm;
