import React from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Header as="h2" color="grey" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.changeHandler}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.changeHandler}
              type="password"
            />
            <Button color="grey" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </div>
    );
  }
}

export default Login