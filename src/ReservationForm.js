import React, { Component } from 'react';
import { fetchPoster } from './fetchs'

export default class ReservationForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          number: '',
          time: '',
          date: ''
      }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetchPoster(this.state)
        .then(result => this.props.addReservation(result))
  }
  
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <input
                type='text'
                name='name'
                placeholder='Name...'
                onChange={this.handleChange}
                value={this.state.name}
            />
            <input
                type='text'
                name='date'
                placeholder='Date: (mm/yy)'
                onChange={this.handleChange}
                value={this.state.date}
            />
            <input
                type='number'
                name='number'
                placeholder='Number of Guests'
                onChange={this.handleChange}
                value={this.state.number}
            />
            <input
                type='text'
                name='time'
                placeholder='Time (7:00)...'
                onChange={this.handleChange}
                value={this.state.time}
            />
            <button onSubmit={this.handleSubmit}>Add Reservation</button>
          </form>
        
      </div>
    )
  }
}
