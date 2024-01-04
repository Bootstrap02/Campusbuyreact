//

const initstate = {
    userToken : []
  }
  
  
  export const userTokenReducer = (state = initstate, action) => {
      if (action.type === 'SEND_USERTOKEN') {
          return {
              
              userToken: action.userToken // Concatenate the new todo to the todos array
          }
      }
  
      
      return state;
  }
  
  
  
  
  
  