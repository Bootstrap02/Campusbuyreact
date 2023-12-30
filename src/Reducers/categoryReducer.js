//

const initstate = {
    categories : []
  }
  
  
  export const categoryReducer = (state = initstate, action) => {
      if (action.type === 'GET_CATEGORY') {
          return {
              ...state,
              categories: action.category // Concatenate the new todo to the todos array
          }
      }
  
      
      return state;
  }
  
  
  
  
  
  