//

const initstate = {
  universities : []
}


export const schoolsReducer = (state = initstate, action) => {
    if (action.type === 'GET_UNIVERSITIES') {
        return {
            ...state,
            universities: action.schools // Concatenate the new todo to the todos array
        }
    }

    
    return state;
}





