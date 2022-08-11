import React from 'react'

export default function Card(props) {

  return (
    <div>
        <p><img src={props.img} alt="imagen"/></p>
        <p>{props.name}</p>
        <p>{props.origin}</p>
        <p>{props.species}</p>
        <p>{props.episodes}</p>
    </div>
  )
}
