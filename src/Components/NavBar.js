import React from "react";
import { Menu, Dropdown, Form, Input } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  state = { 
    activeItem: "home",
    value: ""
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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
    const { activeItem } = this.state;

    let authorArr = this.props.authors.map(author => ({
      key: author.id,
      text: author.name,
      value: author.id
    }))

    let authorOptions = ["", ...authorArr]


    return (

      <Menu inverted color="grey" size="massive">
        <Link to="/">
          <img className="nav-bar-logo" src="/newsy_logo.png" alt="logo"/>
        </Link>
        <div className="left menu">
          <Menu.Item
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <Link to="/"><span>Newsy</span></Link>
          </Menu.Item>
          <Menu.Item
            name="Authors"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          >
            <Link to="/authors"><span>Authors</span></Link>
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
            name="Login"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Sign Up"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
        </div>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
