import React from 'react'
import Card from "./Card.jsx";
import {getCharacters} from "../redux/actions.js";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar.jsx';
import Paginado from './Paginado.jsx';
import { useState } from 'react';
import "./css/Home.css";

export default function Home() {
  const dispatch= useDispatch();
  let allCharacters= useSelector((state)=> state.characters);
  const[characterPerPage, setCharactersPerPage]=useState(9);
  let page=useSelector((state)=> state.page);
  let indexOfLastCharacter= page*characterPerPage;
  let indexOfFirstCharacter=indexOfLastCharacter-characterPerPage;
  let currentCharacters=allCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);


  useEffect(()=>{
    dispatch(getCharacters())
  },[dispatch])

  function handleChangeRange(e){
    setCharactersPerPage(e.target.value)
  }

  return (
    <div>
      <NavBar/>
      <h1>home</h1>
      <label>Characters per page</label>
      <select onChange={(e)=> handleChangeRange(e)} >
        <option value={5}>5</option>
        <option value={9}>9</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
     
      <Paginado 
      allCharacters={allCharacters.length}
      characterPerPage={characterPerPage}
      />
      <div className='grid'>
      {
        currentCharacters?.map(cur=>{
          return( 
            <div>
              <Card
                key={cur.id}
                img={cur.img}
                name={cur.name}
                origin={cur.origin}
                spices={cur.spices}
                episodes={cur.episodes}
              />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
