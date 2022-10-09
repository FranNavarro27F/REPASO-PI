import React from 'react';
import { useNavigate } from "react-router-dom";

import "./css/Landing.css";


export default function Landing() {
  const navigate = useNavigate();
  

  return (
    <div id={"landing_div"}>
      <div id={"landing_div_button"}>
        <button onClick={()=>navigate("/home")}>start !!</button> 
      </div>
    </div>
  )
}
