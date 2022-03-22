import React from 'react';
// import Card from 'react/Card'

class Locations extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }
  render () {

    let cityLocations = this.props.cityData.data ? this.props.cityData.data.map((city,idx) => {
      return(
        <li><p>{city.display_name}</p><p>Lat: {city.lat}, Lon: {city.lon}</p></li>
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
