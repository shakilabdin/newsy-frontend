import React from 'react';
import './App.css';
import AuthorContainer from './Containers/AuthorContainer'
import ShowContainer from './Containers/ShowContainer'

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
        {/* <h1>Welcome to Newsy</h1> */}
        <AuthorContainer authors={this.state.authors}/>
        {/* <ShowContainer author={this.state.authors[96]} updateAuthor={this.updateAuthor} /> */}
      </div>
    );
  }
}

export default App;
