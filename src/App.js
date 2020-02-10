import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import AuthorContainer from './Containers/AuthorContainer'
import ShowContainer from './Containers/ShowContainer'
import NavBar from './Components/NavBar'
import Welcome from './Components/Welcome'

class App extends React.Component {

  render() {
    // console.log(this.state.authors)
    return (
      <div>
        <NavBar />
        <Switch> 
          <Route path="/authors/:id" render={(routerProps) => <ShowContainer routerProps={routerProps} updateAuthor={this.updateAuthor} />} />
          <Route path="/authors" render={() => <AuthorContainer />} />
          <Route path="/login" render={() => <AuthorContainer />} />
          <Route path="/signup" render={() => <AuthorContainer />} />
          <Route path="/" component={Welcome} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
