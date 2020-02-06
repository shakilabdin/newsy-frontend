import React from 'react'
import ArticleCard from '../Components/ArticleCard'
import ShowHeader from './ShowHeader'


class ShowContainer extends React.Component {


    render() {
        let displayedArticles
        
        if (this.props.author) {
            displayedArticles = this.props.author.articles 
            console.log(displayedArticles)
            displayedArticles = displayedArticles.map(article => <ArticleCard key={article.id} {...article} />) 
        } else {displayedArticles = "loading"}

        return (

            <div>
                <ShowHeader {...this.props.author} />
                {displayedArticles}
            </div>


        )
    }

}

export default ShowContainer;