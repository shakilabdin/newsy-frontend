import React from 'react'
import { Item } from 'semantic-ui-react'

class ArticleCard extends React.Component {
    render() {

        // const dateOptions = {
        //     weekday: 'long',
        //     year: 'numberic',
        //     month: 'long',
        //     day: 'numberic'
        // }

        return (
          <Item>
            <Item.Image size="medium" src={this.props.urlToImage} />

            <Item.Content>
              <Item.Header as="a"><a href={this.props.url}>{this.props.title}</a></Item.Header>
              <Item.Meta> </Item.Meta>
              <Item.Description>
                {this.props.description ? this.props.description : "No description"}
              </Item.Description>
              <Item.Extra>Published: { this.props.publishedAt.slice(0, 10) }</Item.Extra>
            </Item.Content>
          </Item>
        );
    }
}

export default ArticleCard;



    // <a href={this.props.url}> <h4>{this.props.title}</h4> </a>

                // <img className="article-thumbnail" src={this.props.urlToImage}/>

                // <p>{this.props.description ? this.props.description : "No description"}</p>