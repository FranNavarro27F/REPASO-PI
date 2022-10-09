import React from 'react'
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { searchName, setPage } from '../redux/actions';


export default function SearchBar() {
    let dispatch=useDispatch();
    let [name, setName]=useState("");


   function handleSearch(e){
        setName(e.target.value.toLowerCase())
   }
   function hanleSubmit(e){
        e.preventDefault();
       dispatch(searchName(name));
       setPage(1);

   }
    
    return (
    <div>
        <form onSubmit={(e)=>{hanleSubmit(e)}}>
            <input type={"text"} placeholder="search character..." onChange={(e)=>{handleSearch(e)}}/>
            <input type={"submit"} value={"🔎"}></input>   
        </form>
        
    </div>
  )
}
