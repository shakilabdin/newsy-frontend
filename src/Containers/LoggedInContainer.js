import React from 'react';
import {Route, Switch} from 'react-router-dom'
import AuthorContainer from './AuthorContainer'
import ShowContainer from './ShowContainer'
import NavBar from '../Components/NavBar'

let API = "http://localhost:3000/authors"


class LoggedInContainer extends React.Component {
  state = {
    authors: []
  };

  // On mount fetch all authors
  componentDidMount() {

    this.fetchAuthors()
    const token = localStorage.token;

     if (token) {
       //get user info
        this.props.checkAutoLogin(token)
     } else {
       this.props.routerProps.history.push('/')
     }
  }

  fetchAuthors = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(result =>
        this.setState({
          authors: result
        })
      );
  }

  render() {
    return (
      <div>
        <Route
          path="/authors"
          render={routerProps => (
            <NavBar
              routerProps={routerProps}
              authors={this.state.authors}
              logout={this.props.logout}
              currentUser={this.props.currentUser}
            />
          )}
        />
        <Switch>
          <Route
            path="/authors/:id"
            render={routerProps => (
              <ShowContainer
                routerProps={routerProps}
                updateAuthor={this.updateAuthor}
                currentUser={this.props.currentUser}
              />
            )}
          />
          <Route
            path="/authors"
            render={() => <AuthorContainer authors={this.state.authors} />}
          />
        </Switch>
      </div>
    );
  }
}

export default LoggedInContainer;
