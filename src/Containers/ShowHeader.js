import React from 'react'
import AuthorCard from '../Components/AuthorCard'

class ShowHeader extends React.Component {

    render() {
        return (
            <div className="show-header">
                <AuthorCard {...this.props}/>
                <button>Edit Author</button>
            </div>
        )
    }
}

export default ShowHeader;