

const initialState = {
    characters:[],
    allCharacters:[],
    page:1,
    episodes:[],
    detail:{}
};



export default function rootReducer(state= initialState, action) {

    switch(action.type){
        case "GET_CHARACTERS":
            
            return{
                ...state,
                characters: action.payload,
                allCharacters: action.payload,
            }
        case "PREV":
            return{
                ...state,
                page:action.payload
            }
        case "NEXT":
            return{
                ...state,
                page:action.payload
            }
        case "SET_PAGE":
            return{
                ...state,
                page:action.payload
            }
        case "GET_EPISODES":
            return{
                ...state,
                episodes: action.payload
            }
        case "CREATE_CHARACTER":
            return{
                ...state,
                characters:[...state.characters,action.payload]
            }
        case "GET_DETAIL":
            return {
                ...state,
                detail:action.payload
            }
        case "CLEAN_DETAIL":
            return {
                ...state,
                detail:action.payload
            }
        case "SEARCH_NAME":
            let filtrados=state.allCharacters.filter((cur)=> cur.name.toLowerCase().includes(action.payload));

            return{
                ...state,
                characters: filtrados
            }
        
        case "ORDENAR":

            let a= action.payload=== "aAz"?( state.characters.sort((a,b)=>{
                if(a.name > b.name){
                    return 1;
                }else if(b.name > a.name){
                    return -1;
                }else{
                    return 0;
                }
               
            })): action.payload=== "zAa"?( state.characters.sort((a,b)=>{
                if(a.name < b.name){
                    return 1;
                }else if(b.name < a.name){
                    return -1;
                }else{
                    return 0;
                }
            })): action.payload=== "default"?[...state.allCharacters]:[...state.allCharacters]
              
           
            return{
                ...state,
                allCharacters:[...state.allCharacters],
                characters: a
            }

        default:
            return state;
    }   
  
}

