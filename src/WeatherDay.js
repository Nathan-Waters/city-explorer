import React from 'react';
import './Header.css'
import Card from 'react-bootstrap/Card'

class WeatherDay extends React.Component {
  render () {

    let dailyReport = this.props.weatherData ? this.props.weatherData.map((forecast,idx) => {
        return(
          <Card key={idx}>
            <Card.Title>{forecast.date}</Card.Title>
            <Card.Text>{forecast.description}</Card.Text>
          </Card>
        )
      }) : null

      return(
        <>
          {dailyReport}
        </>
      )
    }
  }

export default WeatherDay;
