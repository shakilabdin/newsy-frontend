import React from 'react'
import { Link } from 'react-router-dom'
import AuthorCard from '../Components/AuthorCard'
import SearchBar from '../Components/SearchBar'

class AuthorContainer extends React.Component {

    state = {
        search: ""
    }


    searchChangeHandler = (newSearch) => {
        this.setState({
            search: newSearch
        })
    }

    render() {

        let displayedAuthors = this.props.authors.filter(author => author.name.toLowerCase().includes(this.state.search.toLowerCase()))
        displayedAuthors = displayedAuthors.map(author => 
            <Link to={`/authors/${author.id}`}><AuthorCard key={author.id} {...author} /></Link>)

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