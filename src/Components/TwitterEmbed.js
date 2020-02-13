import React from 'react'

class TwitterEmbed extends React.Component {
  
  render() {
    return (
      <div>
        {this.props.twitter ? (
          <a
            className="twitter-timeline"
            href={`https://twitter.com/${this.props.twitter}?ref_src=twsrc%5Etfw`}
          >Loading</a>
        ) : (
          "THERE IS NO TWITTER!"
        )}
      </div>
    );
  }
}

export default TwitterEmbed
