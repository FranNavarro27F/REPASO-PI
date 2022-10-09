import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { cleanDetail, getDetail } from '../redux/actions';

export default function Detail() {
  let dispatch=useDispatch();
  const {id}=useParams();

  useEffect(()=>{
    dispatch(getDetail(id))
    return function(){
      dispatch(cleanDetail())
    }
  },[dispatch, id])

  let d=useSelector((state)=> state.detail);
  console.log(d)
  return (
    <div>
      <div><p><img src={d.img} alt="imagen" /></p></div>
      <div><h2><p>Name: {d.name}</p></h2></div>
      <div><h3><p>species: {d.species}</p></h3></div>
      <div><h3><p>origin: {d.origin}</p></h3></div>
      Episodes:
      <ul>
      {
        d.episodes?.map(cur=>{
          return(
            <p key={cur}>{cur}</p>
          ) 
        })
      }
      </ul>
      <div>
        <Link to={"/home"}> 
        <button>Volver al Home</button>
        </Link>
      </div>


    </div>
  )
}
