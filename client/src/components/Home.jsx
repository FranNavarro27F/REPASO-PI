import React from 'react'
import Card from "./Card.jsx";
import {getCharacters} from "../redux/actions.js";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar.jsx';

export default function Home() {
  const dispatch= useDispatch();
  let allCharacters= useSelector((state)=> state.characters);

  useEffect(()=>{
    dispatch(getCharacters()) 
  },[dispatch])
 
  return (
    <div>
      <NavBar/>
      <h1>home</h1>
      {
        allCharacters?.map(cur=>{
          return <Card
            key={cur.id}
            img={cur.img}
            name={cur.name}
            origin={cur.origin}
            spices={cur.spices}
            episodes={cur.episodes}
          />
        })
      }
    </div>
  )
}
