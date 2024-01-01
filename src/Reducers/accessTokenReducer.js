//

const initstate = {
    accessToken : []
  }
  
  
  export const accessTokenReducer = (state = initstate, action) => {
      if (action.type === 'GET_ACCESS_TOKEN') {
          return {
              ...state,
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
  
  
  
  
  
  