import React from 'react';
import axios from 'axios';
import Locations from './Locations';
import SearchBar from './SearchBar';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      city: '', 
    }
  }
  
  HandleSearch = async (e) => {
    e.preventDefault();
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    console.log(cityData);
    this.setState({
      cityData : cityData,
    })
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  render () {
  return(
    <>
      <h1>Please enter a Location</h1> 
      <SearchBar
        data={this.state.cityData}
        HandleSearch={this.HandleSearch}
        handleCityInput={this.handleCityInput}
      />
      <Locations
        cityData={this.state.cityData}
      />
    </>
  );
  }
}

export default App;
