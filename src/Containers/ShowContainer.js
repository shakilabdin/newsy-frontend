import React from 'react'
import ArticleCard from '../Components/ArticleCard'
import ShowHeader from './ShowHeader'


class ShowContainer extends React.Component {

    // componentDidMount() {
    //     fetch(`localhost:3000/authors/${parseInt(this.props.routerProps.match.params.id)}`)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // }

    renderArticles = () => {
        // let displayedArticles = this.props.author.articles 
        //     console.log(displayedArticles)
       let displayedArticles = this.props.author.articles.map(article => 
            <ArticleCard 
                key={article.id} 
                {...article} />) 

        return( 
            <div>
                <ShowHeader {...this.props.author} updateAuthor={this.props.updateAuthor} />
                { displayedArticles }
            </div >
        )
    }

    render() {

        return (
            <div>
                {this.props.author ? this.renderArticles() : <div>Loading...</div> }
            </div>
        )
    }

}

export default ShowContainer;