import * as ActionType from "../constants/ActionType";
import axios from 'axios';


export const getData = () => async(dispatch )=> {
  
await axios.get('https//jsonplaceholder.typicode.com/posts')
// axios.get(undefined,(error)=>{
//  if(error.message==='ERR_NAME_NOT_RESOLVED && !error.response'){
//   toast.error('Network error -make sure api is running!')

.then(response => {
  dispatch({
    type:ActionType["FETCH_POSTS"],
    payload:response.data,
  });
})
.catch((error)=>{
  console.log("axios error",error.message);
  dispatch({
    type:ActionType["NEW_POST"],
    payload:error.message,
  });
});
};


