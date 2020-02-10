import React from 'react'

let missingImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvSeCWTVw5702o2n_lZRid3MkuIi8t2HkvZc6gvI1Eu3fZzeQu"

class AuthorCard extends React.Component {

    render() {
        return (
            <div>
                <img className="headshot" src={this.props.image ? this.props.image : missingImg} alt={"picture of " + this.props.name}/>
                <span>{this.props.name}</span>
                {/* <p>{this.props.articles_count} article{this.props.articles_count > 1 && "s"} written</p> */}
            </div>

        )
    }



}

export default AuthorCard;