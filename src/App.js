import React from 'react';
import './App.css'
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import Weather from './Weather'
import Locations from './Locations';
import SearchBar from './SearchBar';
import Movie from './Movie';

class App extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      cityData: null,
      city: '',
      weatherData : [],
      movieData : [],
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
    HandleSearch = async () => {
      try {
        let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

        //gets the weather data
        this.weatherData(); 
        //gets the movie data
        this.movieData();

        //collecting only the first object from city
        this.setState({
          cityData : cityData.data[0],
        });
      } catch (error){
        console.log(error);
      }
    }

    //takes the next three days forecast 
    weatherData = async () => {
      try {
      let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?weatherQuery=${this.state.city}`);
      //can be changed to more or less with the loop
      let weatherNewArr = [];
      for(let i = 0; i < 3; i++){
        weatherNewArr.push(weatherData.data[i])
      }
      // console.log(weatherNewArr);
      this.setState({
        weatherData : weatherNewArr
      })
    } catch (error){
    console.log(error);
    }
  }

    //takes the data from server for movies
    movieData = async () => {
      try {
      let movieData = await axios.get(`${process.env.REACT_APP_SERVER}/movie?movieQuery=${this.state.city}`);
      console.log(movieData);
      let movieNewArr = [];
      for(let i = 0; i < 6; i++){
        movieNewArr.push(movieData.data[i])
      }
      console.log(movieNewArr);
      this.setState({
        movieData : movieNewArr
      })
    } catch (error){
      console.log(error);
      }
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
        <Movie
          movieData={this.state.movieData}
        />
        <Footer/>
      </>
    );
  }
}

export default App;

