import React, {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCaracter, getEpisodes } from '../redux/actions';
import NavBar from './NavBar';


export default function Create() {
  let dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getEpisodes())  
  },[dispatch])

  let AllEpisodes= useSelector((state)=> state.episodes)

  let [input, setInput]= useState({
    img:"",
    name:"",
    origin:"",
    specie:"",
    episodes:[]
  });

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleChangeSelect(e){
    setInput({
      ...input,
      episodes:[...input.episodes,e.target.value]
    })
  }

  function handleSubmitForm(e){
    e.preventDefault();
    dispatch(createCaracter(input));
    setInput({
      img:"",
      name:"",
      origin:"",
      specie:"",
      episodes:[]
    })
  }


  return (
    <div>
       <NavBar/>
    <form onSubmit={(e)=>{ handleSubmitForm(e)}}>
      <div>
        <label>Name</label>
        <input type="text" name={"name"} value={input.name} 
        onChange={(e)=>{handleChange(e)}}
        />
      </div>
      <div>
        <label>Origin</label>
        <input type="text" name={"origin"} value={input.origin} 
        onChange={(e)=>{handleChange(e)}}
        />
      </div>
      <div>
        <label>Specie</label>
        <input type="text" name={"specie"} value={input.specie} 
        onChange={(e)=>{handleChange(e)}}
        />
      </div>
      <div>
        <label>Img</label>
        <input type="text" name={"img"} value={input.img} 
        onChange={(e)=>{handleChange(e)}}
        />
      </div>

        <label>Episodes</label>
      <select  onChange={(e)=>{handleChangeSelect(e)}}>
        <option value="default">Select Episode</option>
        {
          AllEpisodes?.map(cur=>{
            return <option key={cur.id} value={cur.id}>{cur.name}</option>
          })
        }
      </select>
      <input type="submit" />
    </form>

    </div>
  )
}
