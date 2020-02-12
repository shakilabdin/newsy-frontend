import React from 'react';
import './App.css';
import {Route } from 'react-router-dom'
import HomeContainer from './Containers/HomeContainer';
import LoggedInContainer from "./Containers/LoggedInContainer";


class App extends React.Component {
  
  setUser = response => {
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

  render() {
    console.log("App Render")
    return (
      <div>
        <Route path="/authors" render={() => <LoggedInContainer />} />
        <Route
          exact path="/"
          render={() => <HomeContainer setUser={this.setUser} />}
        />


      </div>
    );
  }
}
 export default App
