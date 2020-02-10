import React from 'react'
import { Link } from 'react-router-dom'
import AuthorCard from '../Components/AuthorCard'
import SearchBar from '../Components/SearchBar'

let API = "http://localhost:3000/authors"

class AuthorContainer extends React.Component {

    state = {
        search: "",
        authors: []
    }

    componentDidMount() {
        fetch(API).then(resp => resp.json())
            .then(result => this.setState({
                authors: result
            }))
    }



    searchChangeHandler = (newSearch) => {
        this.setState({
            search: newSearch
        })
    }

    render() {
        // map to implement search filter
        let displayedAuthors = this.state.authors.filter(author => author.name.toLowerCase().includes(this.state.search.toLowerCase()))
        // resort alphabetically
        displayedAuthors.sort((a, b) => a.name.localeCompare(b.name))
        // map to AuthorCard componenets
        displayedAuthors = displayedAuthors.map(author => 
            <Link key={author.id} to={`/authors/${author.id}`}><AuthorCard key={author.id} {...author} /></Link>)

        console.log(this.state.search)
        return (
            <div>
                <h1>Author Container</h1>
                <SearchBar search={this.state.search} searchChangeHandler={this.searchChangeHandler}/>
                {displayedAuthors}
            </div>
        )

    }


}

export default AuthorContainer;