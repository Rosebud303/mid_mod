import React, { Component } from 'react';
import './App.css';
import ReservationForm from './ReservationForm';
import ReservationContainer from './ReservationContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(reservations => this.setState({ reservations}))
  }

  addReservation = (res) => {
    const newRes = {...res, id: res.id}
    const reservations = [...this.state.reservations, newRes]
    this.setState({ reservations })
  }
  
  render() {
    // console.log(this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
