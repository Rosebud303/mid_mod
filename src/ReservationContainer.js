import React from 'react';
import Card from './Card'
import './ReservationContainer.css'

const ReservationContainer = (prop) => {
  const displayReservations = prop.reservations.map( res => {
      return <Card {...res} key={res.id}/>
  })
  return (
    <div className='card-holder'>
      {displayReservations}
    </div>
  )
}

export default ReservationContainer
