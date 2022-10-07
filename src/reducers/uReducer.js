import * as ActionType from '../constants/ActionType';

let initialState = {
  data:[],
  error:""
}

export const uReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionType.FETCH_POSTS:{
            return{
                ...state, data:state.data.concat(action.payload)
            }
        }
    
case ActionType.NEW_POST:{
    return{
        ...state,error:action.payload,
    }
}
default:
    return state;
}
}
