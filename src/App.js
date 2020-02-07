import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import AuthorContainer from './Containers/AuthorContainer'
import ShowContainer from './Containers/ShowContainer'
import NavBar from './Components/NavBar'
import Welcome from './Components/Welcome'

let API = "http://localhost:3000/authors"

class App extends React.Component {


  state = {
    authors: [],
    selectedAuthor: 0
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json())
    .then(result => this.setState({
      authors: result
    }))
  }

  updateAuthor = (editedAuthor) => {
    console.log("update author", editedAuthor)
    let newAuthors = this.state.authors.map(author =>  {
      if (author.id === editedAuthor.id) {
        return editedAuthor
      } else {
        return author
      }
    })
    this.setState({
      authors: newAuthors
    })
  }

  render() {
    // console.log(this.state.authors)
    return (
      <div>
        <NavBar />
        <Switch> 
          <Route path="/authors/:id" render={(routerProps) => <ShowContainer routerProps={routerProps} updateAuthor={this.updateAuthor} />} />
          <Route path="/authors" render={() => <AuthorContainer authors={this.state.authors} />} />
          <Route path="/login" render={() => <AuthorContainer authors={this.state.authors} />} />
          <Route path="/signup" render={() => <AuthorContainer authors={this.state.authors} />} />
          <Route path="/" component={Welcome} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
