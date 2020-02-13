import React from 'react'
import { Modal, Button, Icon, Header, Form} from 'semantic-ui-react'

class AuthorEditForm extends React.Component {
  
  state = {
    showModal: false
  }

  // changeHandler = (e) => {
  //   console.log(e)
  //   this.setState({
  //   [e.target.name]: e.target.value    
  //   })
  // }


  submitHandler = (e) => {
    // e.preventDefault()
    // this.props.toggleEditing()
    this.setState({
      showModal: false
    })

    // PATCH request (coming soon!)
    const bodyObj = {
      id: this.props.id,
      name: this.props.name,
      image: this.props.image,
      twitter: this.props.twitter,
      articles: this.props.articles
    }
    
    // handling for leading @ on twitter handle. Turns out Twitter can handle it with or without @
    // if (bodyObj.twitter.charAt(0) === '@') {
    //   bodyObj.twitter = bodyObj.twitter.slice(1)
    // }

    // optimistic render
    this.props.updateAuthor(bodyObj)

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
            Edit Author
          </Button>
        }
        basic
        size="small"
      >
        <Header icon="edit" content="Update Author Details" />
        <Modal.Content>
          <Form>
            <Form.Field>
              <lable>Image URL</lable>
              <input
                onChange={e => this.props.editFormChangeHandler(e)}
                name="image"
                value={this.props.image}
                type="text"
              />
            </Form.Field>
            <Form.Field>
              <lable>Twitter Handle</lable>
              <input
                onChange={e => this.props.editFormChangeHandler(e)}
                name="twitter"
                value={this.props.twitter}
                type="text"
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => {
              this.setState({showModal: false});
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
        </Modal.Actions>
      </Modal>
    );
  }
}

export default AuthorEditForm;