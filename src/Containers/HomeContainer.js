import React from 'react'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import {
  Grid,
} from "semantic-ui-react";

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
            <img className="home-logo" src="newsy-logo.png" alt="newsy logo"/>
            <br/>
            <br/>
            <br/>
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