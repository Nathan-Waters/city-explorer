import React from 'react';
import Container from 'react-bootstrap/Container'
import './Header.css'

class Header extends React.Component {
  render () {
    return(
      <Container className='header'>
        <h1>City Explorer!</h1>
      </Container>
    );
  }
}

export default Header;
