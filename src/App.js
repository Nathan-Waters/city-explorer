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
    }
  }

  HandleSearch = async (e) => {
    e.preventDefault();
    try { 
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

      // let imgURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=13`;

      console.log(cityData);
      this.setState({
        cityData : cityData,
        // cityImg : imgURL,
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
