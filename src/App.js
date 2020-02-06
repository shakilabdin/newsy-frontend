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

  // selectAuthor = () => {

  // }

  render() {
    // console.log(this.state.authors)
    return (
      <div>
        {/* <h1>Welcome to Newsy</h1> */}
        {/* <AuthorContainer authors={this.state.authors}/> */}
        <ShowContainer author={this.state.authors[96]}/>
      </div>
    );
  }
}

export default App;
