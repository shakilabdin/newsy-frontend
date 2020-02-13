import React from 'react'
import { Modal, Button, Icon, Header, Form } from 'semantic-ui-react'

class AddRatingModal extends React.Component {
  
  state = {
    showModal: false,
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

  submitHandler = e => {
    this.setState({
      showModal: false
    });

    // ABILITY TO HANDLE ADD
    let bodyObj = {
      user_id: this.props.currentUser.id,
      author_id: this.props.authorId,
      likeability: this.state.likeability,
      integrity: this.state.integrity
    };

    // IF WE ARE IN EDIT MORE, SEND A PATCH, OTHERWISE use this.props.addRating
    if (this.state.editMode) {
      bodyObj.id = this.state.ratingId 
      this.props.editRating(bodyObj);
    } else {
      this.props.addRating(bodyObj);
    }
  };

  deleteHandler = () => {
    this.setState({ showModal: false });
    this.props.deleteRating(this.state.ratingId)
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
    // if (this.props.currentUser && this.props.ratings) {
    //   this.checkForMyRating();
    // }

    return (
      <Modal
        open={this.state.showModal}
        trigger={
          <Button
            onClick={() => {
              this.setState({ showModal: true });
            }}
            basic
            color="grey"
            floated="right"
          >
            {this.state.editMode ? "Edit Rating" : "Add Rating"}
          </Button>
        }
        basic
        size="small"
      >
        <Header
          icon="edit"
          content={
            this.state.editMode ? "Edit your Rating" : "Rate this Author"
          }
        />
        <Modal.Content>
          <div>
            <h4> Journalistic Integrity: {this.state.integrity} </h4>
            <input
              className="slider"
              min="-5"
              max="5"
              name="integrity"
              step="1"
              type="range"
              onChange={e => this.changeHandler(e)}
              value={this.state.integrity}
            />
          </div>
          <br />
          <div>
            <h4> Subjective Likeability: {this.state.likeability} </h4>
            <input
              className="slider"
              min="-5"
              max="5"
              name="likeability"
              step="1"
              type="range"
              onChange={e => this.changeHandler(e)}
              value={this.state.likeability}
            />
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => {
              this.setState({ showModal: false });
            }}
            basic
            color="red"
            inverted
          >
            <Icon name="user cancel" /> Cancel
          </Button>
          <Button
            onClick={e => {
              this.submitHandler(e);
            }}
            color="teal"
            inverted
          >
            <Icon name="checkmark" /> Submit
          </Button>
          <br />
          <Button onClick={this.deleteHandler} basic color="red">
            <Icon name="delete" /> Delete
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default AddRatingModal;