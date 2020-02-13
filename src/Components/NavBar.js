import React from "react";
import { Menu, Dropdown} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  state = { 
    value: ""
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  // Nav Bar Jump to page submit handler
  submitHandler = (e, data) => {
    let authorId
    if (e && e.target.innerText) {
      authorId = data.options.find(o => o.text === e.target.innerText).value
      this.props.routerProps.history.push(`/authors/${authorId}`)
      this.setState({
        value: ""
      })
    }
  }



  render() {
    let authorArr = this.props.authors.map(author => ({
      key: author.id,
      text: author.name,
      value: author.id
    }))

    let authorOptions = ["", ...authorArr]


    console.log("this.props.currentUser", this.props.currentUser)
    return (

      <Menu inverted color="grey" size="massive">
        <Link to="/authors">
          <img className="nav-bar-logo" src="/newsy_logo.png" alt="logo"/>
        </Link>
        <div className="left menu">
          <Menu.Item
            onClick={this.handleItemClick}
          >
            <Link to="/authors"><span>Newsy</span></Link>
          </Menu.Item>
        </div>
        <div className="right menu">
          
          <Menu.Item>
              <Dropdown 
                onClose={(e, data) => this.submitHandler(e, data)}
                placeholder="Jump to author..."
                search 
                floating
                labeled 
                value={this.state.value}
                options={authorOptions}
              />
          </Menu.Item>


          <Menu.Item
            onClick={this.props.logout}
          >{this.props.currentUser ? `Logout, ${this.props.currentUser.username}` : "Logout"}</Menu.Item>
        </div>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
