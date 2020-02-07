import React from 'react'

class SearchBar extends React.Component {



    render() {
        return (
            <div>
                Search: <input onChange={(e) => this.props.searchChangeHandler(e.target.value)} value={this.props.search} type="text"/>
            </div>
        )
    }
}

export default SearchBar;