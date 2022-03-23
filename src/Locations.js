import React from 'react';
import './Locations.css'
import Card from 'react-bootstrap/Card'

class Locations extends React.Component {
  render () {

    let cityLocations = this.props.cityData.data ? this.props.cityData.data.map((city,idx) => {
      return(
        <Card key={idx}>
          <Card.Title>{city.display_name}</Card.Title>
          <Card.Text>Lat: {city.lat}, Lon: {city.lon}</Card.Text>
        </Card>
      )
    }) : null

      return(
        <>
        <img src={this.props.cityImg} alt='test'/>
          <ul>
            {cityLocations}
          </ul> 
        </>
    );
  }
}

export default Locations;
