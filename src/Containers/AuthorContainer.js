import React from 'react'
import { Link } from 'react-router-dom'
import AuthorCard from '../Components/AuthorCard'
import SearchBar from '../Components/SearchBar'
import {Grid} from 'semantic-ui-react'

// let API = "http://localhost:3000/authors"

class AuthorContainer extends React.Component {

    state = {
        search: ""
    }

    // componentDidMount() {
    //     fetch(API).then(resp => resp.json())
    //         .then(result => this.setState({
    //             authors: result
    //         }))
    // }



    searchChangeHandler = (newSearch) => {
        this.setState({
            search: newSearch
        })
    }

    render() {
        // map to implement search filter
        let displayedAuthors = this.props.authors.filter(author => author.name.toLowerCase().includes(this.state.search.toLowerCase()))
        // resort alphabetically
        displayedAuthors.sort((a, b) => a.name.localeCompare(b.name))
        // map to AuthorCard componenets
        displayedAuthors = displayedAuthors.map(author => 
            <Link key={author.id} to={`/authors/${author.id}`}><Grid.Column><AuthorCard key={author.id} {...author} /></Grid.Column></Link>)

        // console.log(this.state.search)
        return (
            <div>
                <div>
                    <SearchBar search={this.state.search} searchChangeHandler={this.searchChangeHandler}/>
                    </div>
                <hr/>
                <br/>
                <Grid container centered columns={3}>
                    {displayedAuthors}
                </Grid>

            </div>
        )

    }


}

export default AuthorContainer;