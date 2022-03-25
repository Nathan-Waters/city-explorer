import React from 'react';
import './SearchBar.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SearchBar extends React.Component {
  render () {
    return(
      <>
        <Form>
          <input type="type" onChange={this.props.handleCityInput}></input>
          <Button onClick={this.props.HandleSearch}>Explore!</Button>
        </Form>
      </>
    );
  }
}

export default SearchBar;
