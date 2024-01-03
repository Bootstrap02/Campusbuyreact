//

const initstate = {
    accessToken : []
  }
  
  
  export const accessTokenReducer = (state = initstate, action) => {
      if (action.type === 'SEND_ACCESS_TOKEN') {
          return {
              
              accessToken: action.accessToken // Concatenate the new todo to the todos array
          }
      }

      if (action.type === 'DELETE_ACCESSTOKEN') {
          return {
              accessToken: action.accessToken
          }
      }
  
      
      return state;
  }
  
  
  
  
  
  