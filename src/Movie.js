import React from 'react';
// import './Movie.css'
import Card from 'react-bootstrap/Card'

class Movie extends React.Component {
  render () {

    let movieReport = this.props.movieData ? this.props.movieData.map((movie,idx) => {
        return(
          <Card key={idx}>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.imgURL}`}/>
          </Card>
        )
      }) : null

      return(
        <>
          {movieReport}
        </>
      )
    }
  }

export default Movie;