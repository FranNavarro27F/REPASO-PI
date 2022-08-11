
const initialState = {
    characters:[],
    page:1,
    episodes:[]
};

export default function rootReducer(state= initialState, action) {

    switch(action.type){
        case "GET_CHARACTERS":
            return{
                ...state,
                characters: action.payload
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

        default:
            return state;
    }   
  
}

