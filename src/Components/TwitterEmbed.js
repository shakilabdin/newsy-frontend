import React from 'react'
import { Modal, Button, Icon, Header} from 'semantic-ui-react'
import AuthorEditForm from './AuthorEditForm'

class TwitterEmbed extends React.Component {
  
  render() {
    return (
      <div>
        {this.props.twitter ? (
          <a
            className="twitter-timeline"
            href={`https://twitter.com/${this.props.twitter}?ref_src=twsrc%5Etfw`}
          ></a>
        ) : (
          "THERE IS NO TWITTER!"
        )}
      </div>
    );
  }
}

export default TwitterEmbed
