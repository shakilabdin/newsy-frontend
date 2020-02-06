import React from 'react'

class ArticleCard extends React.Component {
    render() {
        return (
            <div >

                <a href={this.props.url}> <h4>{this.props.title}</h4> </a>

                <img className="article-thumbnail" src={this.props.urlToImage}/>

                <p>{this.props.description ? this.props.description : "No description"}</p>
            </div>


        )
    }
}

export default ArticleCard;