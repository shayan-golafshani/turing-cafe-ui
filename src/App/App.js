import React, { Component } from 'react';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      reservations: [
        {"id":1,"name":"Christie","date":"12/29","time":"7:00","number":12},
        {"id":2,"name":"Leta","date":"4/5","time":"7:00","number":2},
        {"id":3,"name":"Pam","date":"1/21","time":"6:00","number":4},
        {"id":4,"name":"Khalid","date":"5/9","time":"7:30","number":7},
        {"id":5,"name":"Will","date":"5/15","time":"6:30","number":2},
        {"id":6,"name":"Eric","date":"5/30","time":"6:00","number":8},
        {"id":7,"name":"Robbie","date":"6/5","time":"5:30","number":2},
        {"id":8,"name":"Travis","date":"6/8","time":"7:00","number":12},
        {"id":9,"name":"Brittany","date":"9/9","time":"7:30","number":3},
      ]
    }
  }

  addReservation = (res) => {
    this.setState( {reservations: [...this.state.reservations, res]} )
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
        let data = response.json();
        console.log('THIS IS YOUR DATA', data)
        console.log(response.json())
      return response.json()
    })
    .catch(err => console.error(err))
  }

  componentDidUpdate() {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.reservations[this.state.reservations.length - 1]),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;