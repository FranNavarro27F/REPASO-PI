import React from 'react'
import { useDispatch } from 'react-redux'
import { ordenar, setPage } from '../redux/actions';

export default function Orders({setOrder}) {
    let dispatch= useDispatch();
    


    function handleChange(e){
        dispatch(ordenar(e.target.value));
        dispatch(setPage(1));
        setOrder(`Ordenado ${e.target.value}`)
    }

  return (
    <div>
        <select onChange={(e)=>{handleChange(e)}}>
            <option value="default">default</option>
            <option value="aAz">a-z</option>
            <option value="zAa">z-a</option>
        </select>
    </div>
  )
}
