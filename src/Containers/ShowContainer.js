import React from 'react'
import { Divider, Grid, Item } from 'semantic-ui-react'
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
       let displayedArticles = this.state.author.articles.map(article => (
         <Item.Group>
           <ArticleCard key={article.id} {...article} />
           <div className="ui divider"></div>
         </Item.Group>
       ));

        return( 
            <div>
                { displayedArticles }
            </div >
        )
    }

    render() {
        return (
          <div>
            <div>
              <ShowHeader
                {...this.state.author}
                updateAuthor={this.updateAuthor}
              />
            </div>
            <Divider hidden />

            <Grid divided>
              <Grid.Row>
                <Grid.Column width={10}>
                  {/* <Item.Group> */}
                  {this.state.author.articles ? (
                    this.renderArticles()
                  ) : (
                    <div>Loading...</div>
                  )}
                  {/* </Item.Group> */}
                </Grid.Column>
                <Grid.Column width={6}>
                  {this.state.author.twitter ? (
                    <div>
                      <a
                        className="twitter-timeline"
                        href={`https://twitter.com/${this.state.author.twitter}?ref_src=twsrc%5Etfw`}
                      >
                        Tweets by {this.state.author.name}
                      </a>
                    </div>
                  ) : (
                    "TWITTER MISSING. ADD IT!!!!"
                  )}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        );
    }

}

export default ShowContainer;