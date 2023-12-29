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

    // if (action.type === 'DELETE_TODO') {
    //     return {
    //     ...state,
    //      todos:state.todos.filter(todo => todo.id !== action.id)
    //     }
        
    // }

    // if (action.type === 'EDIT_TODO') {
    //     const updatedTodos = state.todos.map(todo => {
    //       if (todo.id === action.id) {
    //         return { ...todo, title: action.title, tasks: action.tasks };
    //       }
    //       return todo;
    //     });
    
    //     return {
    //       ...state,
    //       todos: updatedTodos
    //     };
    //   }
    return state;
}





