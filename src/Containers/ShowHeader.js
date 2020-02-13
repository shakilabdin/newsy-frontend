import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import AuthorEditForm from '../Components/AuthorEditForm'
import AddRatingModal from '../Components/AddRatingModal'
import RatingPlot from "../Components/RatingPlot";


class ShowHeader extends React.Component {
  state = {
    editMode: false,
    integrity: 0,
    likeability: 0,
    ratingId: null
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.ratings && this.props.currentUser) {
        this.checkForMyRating();
      } else {
      }
    }
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  checkForMyRating = () => {
    const myRating = this.props.ratings.find(
      rating => rating.user_id === this.props.currentUser.id
    );

    if (myRating) {
      this.setState({
        editMode: true,
        integrity: myRating.integrity,
        likeability: myRating.likeability,
        ratingId: myRating.id
      });
    } else {
      this.setState({
        editMode: false,
        integrity: 0,
        likeability: 0,
        ratingId: null
      });
    }
  };

  render() {
    return (
      <Grid>
        <Grid.Row color="teal">
          <Grid.Column width={3}>
            <Image src={this.props.image} circular bordered />
          </Grid.Column>
          <Grid.Column width={4}>
            <h1>{this.props.name}</h1>
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
            <RatingPlot ratings={this.props.ratings} />
          </Grid.Column>
          <Grid.Column width={2}>
            <AuthorEditForm {...this.props} />
            <AddRatingModal
              {...this.props}
              editMode={this.state.editMode}
              integrity={this.state.integrity}
              likeability={this.state.likeability}
              ratingId={this.state.ratingId}
              currentUser={this.props.currentUser}
              addRating={this.props.addRating}
              editRating={this.props.editRating}
              deleteRating={this.props.deleteRating}
              changeHandler={this.changeHandler}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ShowHeader;
