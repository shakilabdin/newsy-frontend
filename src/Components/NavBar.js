import React from "react";
import { Menu, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      // <div className="nav-bar">
      //   <Link to="/"><img className="nav-bar-logo" src="/newsy_logo.png" /></Link>
      //   <Link to="/"><span className="nav-bar-title">Newsy </span> </Link>
      //   <Link to="/authors"><span className="nav-bar-link">Author Index </span></Link>
      //   <Link to="/login"><span className="nav-bar-link">Login </span></Link>
      //   <Link to="/signup"><span className="nav-bar-link">Signup </span></Link>
      // </div>

      <Menu inverted color="green" size="massive">
        <Link to="/">
          <img className="nav-bar-logo" src="/newsy_logo.png" />
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
            <Input
              className="icon"
              icon="search"
              placeholder="Search..."
              action={{ type: "submit" }}
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

export default NavBar;
