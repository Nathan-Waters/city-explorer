import React from 'react';
import './App.css'
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import Locations from './Locations';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      city: '', 
      cityImg: '',
      error: false,
      errorMessage: '',
      weatherData: [],
      weatherQuery: 'Seattle',
    }
  }

  // handleWeatherInput = (e)=> {
  //   this.setState({
  //     weatherQuery: e.target.value.split(',')[0]
  //   })
  //   console.log(this.state.weatherQuery);
  // }
  
  getWeatherData = async (e) => {
    e.preventDefault();
    let results = await axios.get(`${process.env.REACT_APP_SERVER}/photos?weatherQuery=${this.state.weatherQuery}`)
      console.log(results);
      this.setState({
        weatherData : this.state.results,
      })
    }

    
  HandleSearch = async (e) => {
    e.preventDefault();
    try { 
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

      console.log(cityData);
      this.setState({
        cityData : cityData,
      });

    } catch (error) {
      this.setState({
        error : true,
        errorMessage : `An error occurrred: ${error.response.status}`
      })
    }
  };

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  
    render () {
      return(
        <>
        <Header/>
        <SearchBar
          data={this.state.cityData}
          HandleSearch={this.HandleSearch}
          handleCityInput={this.handleCityInput}
          />
        {this.state.error ? <p>{this.state.errorMessage}</p> :
          <Locations
          handleWeatherInput={this.getWeatherData}
          cityImg={this.state.cityImg}
          cityData={this.state.cityData}
          />
        }
        <Footer/>
          
      </>
    );
  }
}

export default App;

// getWeather = async (city) => {
//   try {
//     let weatherRequestUrl = `${process.env.REACT_APP_SERVER}/weather?city=${city}`;
//     let weatherData = await axios.get(weatherRequestUrl);
//     this.setState({
//       weatherData: weatherData.data,
//     });
//     this.setState({
//       weatherModal: true,
//     })
//   } catch (error) {
//     console.log("Error response: ", error.response);
//     this.setState({
//       error: true,
//       showModal: true,
//       errorMessage: `An Error Occurred ${error.response.status}, ${error.response.statusText}`,
//     });
//     console.log(this.state.errorMessage);
//   }
// };