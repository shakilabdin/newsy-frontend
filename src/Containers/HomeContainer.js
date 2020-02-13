import React from 'react'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class HomeContainer extends React.Component {
  render() {
    return (
      <Grid
        style={{ height: "100vh" }}
        verticalAlign="middle"
        textAlign="center"
      >
        <Grid.Column>
          <Grid.Row>
            <img src="newsy_logo.png" />
          </Grid.Row>
          <Grid.Row>
            <Grid textAlign="center" verticalAlign="top">
              <Grid.Column width="8" style={{ maxWidth: 450 }}>
                <Login setUser={this.props.setUser} />
              </Grid.Column>
              <Grid.Column width="8" style={{ maxWidth: 450 }}>
                <Signup setUser={this.props.setUser} />
              </Grid.Column>
            </Grid>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default HomeContainer