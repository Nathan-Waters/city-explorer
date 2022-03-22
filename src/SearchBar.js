import React from 'react';

// import Form from "react"

class SearchBar extends React.Component {
  render () {
    return(
      <>
        <form>
          <input type="type" onChange={this.props.handleCityInput}></input>
          <button onClick={this.props.HandleSearch}>Explore!</button>
        </form>
      </>
    );
  }
}

export default SearchBar;

