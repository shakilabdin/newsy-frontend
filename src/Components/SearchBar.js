import React from "react";
import { Input } from "semantic-ui-react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="filter">
        <Input
          onChange={e => this.props.searchChangeHandler(e.target.value)}
          value={this.props.search}
          type="text"
          placeholder="Filter authors..."
        />
      </div>
    );
  }
}

export default SearchBar;
