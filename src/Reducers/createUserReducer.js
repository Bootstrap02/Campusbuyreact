//

const initstate = {
    createUser : []
  }
  
  
  export const createUserReducer = (state = initstate, action) => {
      if (action.type === 'CREATE_USER') {
          return {
              
              createUser: action.createUser // Concatenate the new todo to the todos array
          }
      }

     
  
      
      return state;
  }
  
  
  
  
  
  