import React from 'react'
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
            <div className="show-header">
                {/* <AuthorCard {...this.props}/> */}
                <h2>{this.props.name}</h2>
                <button onClick={this.toggleEditing} >Edit Author</button>
                {this.state.editing && <AuthorEditForm toggleEditing={this.toggleEditing} {...this.props} updateAuthor={this.props.updateAuthor} />}
            </div>
        )
    }
}

export default ShowHeader;