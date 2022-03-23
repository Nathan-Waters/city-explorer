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
          <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${city.lat},${city.lon}&zoom=13`}></Card.Img>
        </Card>
      )
    }) : null

      return(
        <>
          <ul>
            {cityLocations}
          </ul> 
        </>
    );
  }
}

export default Locations;
