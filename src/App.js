import React from 'react';
import './App.css'
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import Weather from './Weather'
import Locations from './Locations';
import SearchBar from './SearchBar';

class App extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      cityData: null,
      city: '',
      weatherData : []
    }
  }
    //selects the city, 
    handleCityInput = (event) => {
      event.preventDefault();
      this.setState({
        city: event.target.value
      })
    }

    // searches for a map of the city searched and assigns it as an object to cityData
    HandleSearch = async (e) => {
      e.preventDefault();
        let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

        //gets the weather data
        this.weatherData(); 

        //collecting only the first object from city
        this.setState({
          cityData : cityData.data[0],
        });
      }


    //takes the next three days forecast 
    weatherData = async (e) => {
      let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?weatherQuery=${this.state.city}`);

      //can be changed to more or less with [i]
      let newArr = [];
      for(let i = 0; i < 3; i++){
        newArr.push(weatherData.data[i])
      }
      this.setState({
        weatherData : newArr
      })
    }

  render () {
    return(
      <>
        <Header/>
        <SearchBar
          handleCityInput={this.handleCityInput}
          HandleSearch={this.HandleSearch}
        />
        <Locations
          cityData={this.state.cityData}
        />
        <Weather
          weatherData={this.state.weatherData}
        />
        <Footer/>
      </>
    );
  }
}

export default App;
