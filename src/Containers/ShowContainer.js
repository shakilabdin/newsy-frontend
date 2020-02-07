import React from 'react'
import ArticleCard from '../Components/ArticleCard'
import ShowHeader from './ShowHeader'


class ShowContainer extends React.Component {

    state = {
        author: {}
    }

    componentDidMount() {
        fetch(`http://localhost:3000/authors/${parseInt(this.props.routerProps.match.params.id)}`)
        // fetch(`http://localhost:3000/authors/3`)
        .then(resp => resp.json())
        .then(author => {
            this.setState({
                author: author
            })
        })
    }

    updateAuthor = (editedAuthor) => {        
        // optimistic render
        this.setState({
            author: editedAuthor
        })

        const configObj = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(editedAuthor)
        };

        fetch(`http://localhost:3000/authors/${parseInt(this.props.routerProps.match.params.id)}`, configObj)

    }

    renderArticles = () => {
        // let displayedArticles = this.props.author.articles 
        //     console.log(displayedArticles)
       let displayedArticles = this.state.author.articles.map(article => 
            <ArticleCard 
                key={article.id} 
                {...article} />) 

        return( 
            <div>
                <ShowHeader {...this.state.author} updateAuthor={this.updateAuthor} />
                { displayedArticles }
            </div >
        )
    }

    render() {
        return (
            <div>
                {this.state.author.articles ? this.renderArticles() : <div>Loading...</div> }
            </div>
        )
    }

}

export default ShowContainer;