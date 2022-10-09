import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Card.css";
export default function Card(props) {

  return (
    <div className='card'>
      <Link to={`/detail/${props.idRuta}`}>
        <img src={props.img} alt="imagen"/>
      </Link>
      <div>
        <ul>
          <li>Name: {props.name}</li>
          <li>Origin: {props.origin}</li>
          <li>Species: {props.species}</li>
          <li>Episodes: {props.episodes}</li>
        </ul>
      </div>
    </div>
  )
}
