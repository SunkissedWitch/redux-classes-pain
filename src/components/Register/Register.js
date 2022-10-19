import React from "react";
// import { withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

export class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    // Todo: needs validation for email
    console.log('submit', this.state)
  }

  render () {

    return (
      <>
        <h3>Sign In</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={this.handleChange}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
}
// export default connect(mapStateToProps)(withRouter(Register));
export default connect(mapStateToProps)(Register);
