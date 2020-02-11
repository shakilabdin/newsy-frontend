import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import AuthorCard from '../Components/AuthorCard'
import AuthorEditForm from '../Components/AuthorEditForm'

class ShowHeader extends React.Component {

    state = {
        editing: false
    }

    toggleEditing = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    render() {
        return (
          <Grid>
              <Grid.Row>
                  <Grid.Column width={3}>

              <Image
                src={this.props.image}
                circular
                size="medium"
              />

                  </Grid.Column>
                  <Grid.Column width={3}>
                <h1>{this.props.name}</h1>

              <button onClick={this.toggleEditing}>Edit Author</button>
              {this.state.editing && (
                <AuthorEditForm
                  toggleEditing={this.toggleEditing}
                  {...this.props}
                  updateAuthor={this.props.updateAuthor}
                />
              )}

                  </Grid.Column>

              </Grid.Row>
            
          </Grid>
        )
    }
}

export default ShowHeader;