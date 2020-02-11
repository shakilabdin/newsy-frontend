import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

let missingImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvSeCWTVw5702o2n_lZRid3MkuIi8t2HkvZc6gvI1Eu3fZzeQu";

class AuthorCard extends React.Component {
    render() {
        return (
            // <div>
            //     <img className="headshot" src={this.props.image ? this.props.image : missingImg} alt={"picture of " + this.props.name}/>
            //     <span>{this.props.name}: </span>
            //     <span>{this.props.article_count} article{this.props.article_count > 1 && "s"} written</span>
            // </div>

            // Semantic UI style of cards
            <div>
                <Card>
                    <img
                        className="headshot"
                        src={this.props.image ? this.props.image : missingImg}
                        alt={"picture of " + this.props.name}
                    />
                    <Card.Content>
                        <Card.Header>{this.props.name}</Card.Header>
                        <Card.Description>
                            {this.props.article_count} Article
                            {this.props.article_count > 1 && "s"} Written
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name="user" />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
                <br />
            </div>
        );
    }
}

export default AuthorCard;
