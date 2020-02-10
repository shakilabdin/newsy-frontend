import React from 'react'

class AuthorEditForm extends React.Component {
  
  state = {...this.props}

  changeHandler = (e) => {
    this.setState({
    [e.target.name]: e.target.value    
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.toggleEditing()

    // PATCH request (coming soon!)
    const bodyObj = {
      id: this.state.id,
      name: this.state.name,
      image: this.state.image,
      twitter: this.state.twitter,
      articles: this.state.articles
    }
    
    // handling for leading @ on twitter handle. Turns out Twitter can handle it with or without @
    // if (bodyObj.twitter.charAt(0) === '@') {
    //   bodyObj.twitter = bodyObj.twitter.slice(1)
    // }

    // optimistic render
    this.props.updateAuthor(bodyObj)

  }

  
  render() {
    return(
      <form>
        {/* <input onChange={(e) => this.changeHandler(e)} name="name" value={this.state.name} type="text" /> */}
        <input onChange={(e) => this.changeHandler(e)} name="image" value={this.state.image} type="text" />
        <input onChange={(e) => this.changeHandler(e)} name="twitter" value={this.state.twitter} type="text" />
        <input onClick={(e) => this.submitHandler(e)} name="submit" type="submit" />
      </form>

    )
  }
}

export default AuthorEditForm;