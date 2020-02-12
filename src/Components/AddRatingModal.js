import React from 'react'
import { Modal, Button, Icon, Header, Form } from 'semantic-ui-react'

class AddRatingModal extends React.Component {

  state = {
    showModal: false,
    integrity: 0,
    likeability: 0
  }
  
  submitHandler = (e) => {
    this.setState({
      showModal: false
    })
    
    // ABILITY TO HANDLE ADD
    const bodyObj = {
      user_id: this.props.userId,
      author_id: this.props.authorId,
      likeability: this.state.likeability,
      integrity: this.state.integrity
    }

    this.props.addRating(bodyObj)
    
    // ABILITY TO HANDLE EDIT (PATCH)
    // PATCH request (coming soon!)
  }

  changeHandler = (target) => {
    this.setState({
      [target.name]: target.value
    })
  }

  render() {

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
            Add Rating
          </Button>
        }
        basic
        size="small"
      >
        <Header icon="edit" content="Rate this Author" />
        <Modal.Content>
          <div class="field">
            <h4> Journalistic Integrity: {this.state.integrity} </h4>
              <input className="slider" min="-5" max="5" name="integrity" step="1" type="range" onChange={(e) => this.changeHandler(e.target)} value={this.state.integrity} />
          </div>
          <div class="field">
            <h4> Subjective Likeability: {this.state.likeability} </h4>
              <input className="slider" min="-5" max="5" name="likeability" step="1" type="range" onChange={(e) => this.changeHandler(e.target)} value={this.state.likeability} />
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
            <Icon name="remove" /> Cancel
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
        </Modal.Actions>
      </Modal>
    );
  }
}

export default AddRatingModal;