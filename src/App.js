import React from 'react';
import './App.css';
import {Route } from 'react-router-dom'
import HomeContainer from './Containers/HomeContainer';
import LoggedInContainer from "./Containers/LoggedInContainer";


class App extends React.Component {
  state = {
    currentUser: null
  };

  setUser = response => {
    debugger;
    this.setState(
      {
        currentUser: response.user
      },
      () => {
        localStorage.token = response.token;
        this.props.history.push("/authors");
      }
    );
  };

  checkAutoLogin = token => {
    fetch("http://localhost:3000/auto_login", {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors);
        } else {
          this.setState({
            currentUser: response
          });
        }
      });
  };

  render() {
    console.log("App Render");
    return (
      <div>
        <Route
          path="/authors"
          render={routerProps => (
            <LoggedInContainer
              routerProps={routerProps}
              currentUser={this.state.currentUser}
              checkAutoLogin={this.checkAutoLogin}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => <HomeContainer setUser={this.setUser} />}
        />
      </div>
    );
  }
}
 export default App
