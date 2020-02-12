import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import AuthorEditForm from '../Components/AuthorEditForm'

class ShowHeader extends React.Component {



    render() {
        return (
          <Grid>
            <Grid.Row color="teal">
              <Grid.Column width={3}>
                <Image src={this.props.image} circular bordered />
              </Grid.Column>
              <Grid.Column width={6}>
                <h1>{this.props.name}</h1>
                <p style={{ margin: "0px" }}>
                  {this.props.article_count} Article
                  {this.props.article_count !== 1 && "s"} Written
                </p>
                <p style={{ margin: "0px" }}>
                  {this.props.article_count} Article
                  {this.props.article_count !== 1 && "s"} Written
                </p>
                <p style={{ margin: "0px" }}>
                  {this.props.total_ratings} Rating
                  {this.props.total_ratings !== 1 && "s"}
                </p>
                <a href={`https://twitter.com/${this.props.twitter}`}>
                  <i className="twitter icon"></i>
                  <span>@{this.props.twitter}</span>
                </a>
              </Grid.Column>
              <Grid.Column width={7}>
                <AuthorEditForm
                  {...this.props}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
    }
}

export default ShowHeader;