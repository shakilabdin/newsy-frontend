import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import AuthorContainer from './Containers/AuthorContainer'
import ShowContainer from './Containers/ShowContainer'
import NavBar from './Components/NavBar'
import Welcome from './Components/Welcome'

let API = "http://localhost:3000/authors"


class App extends React.Component {

  state = {
    authors: []
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json())
        .then(result => this.setState({
            authors: result
        }))
  }

  render() {
    // console.log(this.state.authors)
    return (
      <div>
        <NavBar authors={this.state.authors}/>
        <Switch> 
          <Route path="/authors/:id" render={(routerProps) => <ShowContainer routerProps={routerProps} updateAuthor={this.updateAuthor} />} />
          <Route path="/authors" render={() => <AuthorContainer authors={this.state.authors} />} />
          <Route path="/login" render={() => <AuthorContainer />} />
          <Route path="/signup" render={() => <AuthorContainer />} />
          <Route path="/" component={Welcome} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
