export const ADD_TODO = "ADD_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const DELETE_TODO = "DELETE_TODO"



export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload
    }
}
export const updateTodo = (payload) => {
    return {
        type: UPDATE_TODO,
        payload: payload
    }
}
export const deleteTodo = (payload) => {
    console.log("payload", payload)
    return {
        type: DELETE_TODO,
        payload: payload
    }
}
