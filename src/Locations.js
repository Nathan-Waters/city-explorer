import React from 'react';
import './Locations.css'
import Card from 'react-bootstrap/Card'

class Locations extends React.Component {
  render () {

    return(
      <>
        {this.props.cityData ?
        <Card>
          <Card.Title>{this.props.cityData.display_name}</Card.Title>
          <Card.Text>Lat: {this.props.cityData.lat}, Lon: {this.props.cityData.lon}</Card.Text>
          <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=13`}></Card.Img>
        </Card>
        : null}
      </>
    )
  }
}

export default Locations;
