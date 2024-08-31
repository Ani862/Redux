import { createStore } from "redux";


const store = createStore(function(state,action){
    if(action.type === "Name")
    {
       return{ 
        ...state,
        name: action.payload 
      }
    }
   return state
},{ 
    name:"John Smith"
})


export default store