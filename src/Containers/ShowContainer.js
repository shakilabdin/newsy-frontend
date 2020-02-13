import React from 'react'
import { Divider, Grid, Item } from 'semantic-ui-react'
import ArticleCard from '../Components/ArticleCard'
import ShowHeader from './ShowHeader'
import TwitterEmbed from '../Components/TwitterEmbed'


class ShowContainer extends React.Component {
  state = {
  };

  componentDidMount() {
    fetch(
      `http://localhost:3000/authors/${parseInt(
        this.props.routerProps.match.params.id
      )}`
    )
      .then(resp => resp.json())
      .then(author => {
        this.setState(
          {
            ...author
          },
          () => this.checkForMyRating
        );
      });
  }

  addRating = bodyObj => {
    console.log("Add Rating after update!", bodyObj);

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(bodyObj)
    };

    fetch(`http://localhost:3000/ratings`, configObj)
      .then(resp => resp.json())
      .then(newRating => {
        console.log("rating", newRating);
        if (this.state.ratings) {
          this.setState({
            ratings: [...this.state.ratings, newRating]
          })
        } else {
          this.setState({
            ratings: [newRating]
          });
        }
      });
  };

  editRating = bodyObj => {

    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(bodyObj)
    };

    fetch(`http://localhost:3000/ratings/${bodyObj.id}`, configObj)
      .then(resp => resp.json())
      .then(editedRating => {
        console.log("rating", editedRating);
        let newRatings = this.state.ratings.map(rating => {
          if (rating.id === editedRating.id) {
            return editedRating
          } else {
            return rating
          }
        })
        this.setState({
          ratings: newRatings
        })
      });
  };

  deleteRating = id => {
    console.log("delete rating", id)

    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      }
    };

    fetch(`http://localhost:3000/ratings/${id}`, configObj)
    
    let newRatings = this.state.ratings.filter(rating => rating.id !== id)
    console.log("deleting rating from showCon state", id)
    this.setState({
      ratings: newRatings
    })
  };

  editFormChangeHandler = e => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateAuthor = editedAuthor => {
    // optimistic render
    this.setState({
      ...editedAuthor
    });

    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(editedAuthor)
    };

    fetch(
      `http://localhost:3000/authors/${parseInt(
        this.props.routerProps.match.params.id
      )}`,
      configObj
    )
      .then()
      .then(() => {
        window.location.reload();
      });
  };

  renderArticles = () => {
    let displayedArticles = this.state.articles.map(article => (
      <Item.Group>
        <ArticleCard key={article.id} {...article} />
        <div className="ui divider"></div>
      </Item.Group>
    ));

    return <div>{displayedArticles}</div>;
  };

  render() {
    return (
      <div>
        <div>
          <ShowHeader
            {...this.state}
            editFormChangeHandler={this.editFormChangeHandler}
            updateAuthor={this.updateAuthor}
            currentUser={this.props.currentUser}
            addRating={this.addRating}
            editRating={this.editRating}
            deleteRating={this.deleteRating}
            ratingChangeHandler={this.ratingChangeHandler}
          />
        </div>
        <Divider hidden />

        <Grid divided>
          <Grid.Row>
            <Grid.Column width={10}>
              {/* <Item.Group> */}
              {this.state.articles ? (
                this.renderArticles()
              ) : (
                <div>Loading...</div>
              )}
              {/* </Item.Group> */}
            </Grid.Column>
            <Grid.Column width={6}>
              <TwitterEmbed twitter={this.state.twitter} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default ShowContainer;