import React from 'react';
import Container from 'react-bootstrap/Container'
import './Footer.css'

class Footer extends React.Component {
  render () {
    return(
      <Container className="footer">
        <h3>Nathan Waters</h3>
        <p>Code Fellows Champion</p>
      </Container>
    );
  }
}

export default Footer;
