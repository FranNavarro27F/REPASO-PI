import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleNextt, handlePrevv } from '../redux/actions';

export default function Paginado({allCharacters, characterPerPage}) {
   let dispatch=useDispatch();
   let page=useSelector((state)=>state.page);

   let numeroPaginas=[];
    let total= Math.ceil(allCharacters/characterPerPage);
    
   for(let i=1; i<= total; i++){
    numeroPaginas.push(i);
   }

   function handlePrev(e){
    dispatch(handlePrevv(page-1))
   }
   function handleNext(e){
    dispatch(handleNextt(page+1))
   }

  return (
    <nav>
        <button disabled={page-1===0} onClick={(e)=>{handlePrev(e)}}>{"<"}</button>
        {page}
        <button disabled={page+1 > numeroPaginas.length} onClick={(e)=>{handleNext(e)}}>{">"}</button>
    </nav>
  )
}
