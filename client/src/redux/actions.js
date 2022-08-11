import axios from "axios";


export function getCharacters(){
    return async function(dispatch){
        let {data}= await axios.get("http://localhost:3001/characters")
        return dispatch({
            type: "GET_CHARACTERS",
            payload: data
        })
    }
}

export function handlePrevv(payload){
    return function (dispatch){
        return dispatch({
            type:"PREV",
            payload:payload
        })
    }
}

export function handleNextt(payload){
    return function (dispatch){
        return dispatch({
            type:"NEXT",
            payload:payload
        })
    }
}

export function getEpisodes(){
    return async function(dispatch){
        let {data}= await axios.get("http://localhost:3001/episodes");
        return dispatch({
            type:"GET_EPISODES",
            payload: data
        })

    } 
}

export function createCaracter(info){
    return async function(dispatch){
        let {data}= await axios.post("http://localhost:3001/character",info);
        return dispatch({
            type:"CREATE_CHARACTER",
            payload: data
        })
    }
}