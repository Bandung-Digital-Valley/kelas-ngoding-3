
import * as TYPE from '../actions/index'

const initialState = {
    todosMonday: [],
    todosTuesday: [],
    todosWednesday: [],
    todosThursday: [],
    todosFriday: [],
    todosSaturday: [],
    todosSunday: []
}

export default function reducer(state=initialState, action){
    const { type, payload } = action

    switch (type) {
        case TYPE.ADD_TODO:
            switch (payload.day) {
                case "monday":
                    return {...state, todosMonday: state.todosMonday.concat(payload.todo) }
                case "tuesday":
                    return {...state, todosTuesday: state.todosTuesday.concat(payload.todo) }
                case "wednesday":
                    return {...state, todosWednesday: state.todosWednesday.concat(payload.todo) }
                case "thursday":
                    return {...state, todosThursday: state.todosThursday.concat(payload.todo) }
                case "friday":
                    return {...state, todosFriday: state.todosFriday.concat(payload.todo) }
                case "saturday":
                    return {...state, todosSaturday: state.todosSaturday.concat(payload.todo) }
                case "sunday":
                    return {...state, todosSunday: state.todosSunday.concat(payload.todo) }
            
            }

        case TYPE.UPDATE_TODO:
            switch (payload.day) {
                case "monday":
                    return {...state, todosMonday: state.todosMonday.map((item, index) => {
                        if(index == payload.index){
                            return {...item, isDone: payload.isDone}
                        }
                    })}
                case "tuesday":
                    return {...state, todosTuesday: state.todosTuesday.map((item, index) => {
                        if(index == payload.index){
                            return {...item, isDone: payload.isDone}
                        }
                    })}
                case "wednesday":
                    return {...state, todosWednesday: state.todosWednesday.map((item, index) => {
                        if(index == payload.index){
                            return {...item, isDone: payload.isDone}
                        }
                    })}
                case "thursday":
                    return {...state, todosThursday: state.todosThursday.map((item, index) => {
                        if(index == payload.index){
                            return {...item, isDone: payload.isDone}
                        }
                    })}
                case "friday":
                    return {...state, todosFriday: state.todosFriday.map((item, index) => {
                        if(index == payload.index){
                            return {...item, isDone: payload.isDone}
                        }
                    })}
                case "saturday":
                    return {...state, todosSaturday: state.todosSaturday.map((item, index) => {
                        if(index == payload.index){
                            return {...item, isDone: payload.isDone}
                        }
                    })}
                case "sunday":
                    return {...state, todosSunday: state.todosSunday.map((item, index) => {
                        if(index == payload.index){
                            return {...item, isDone: payload.isDone}
                        }
                    })}
                    
                    
            }
            
        case TYPE.DELETE_TODO:
            switch (payload.day) {
                case "monday":
                    return {
                        ...state, todosMonday: state.todosMonday.filter((item, index) => {
                            return index != payload.index
                        })
                    }
                case "tuesday":
                    return {
                        ...state, todosTuesday: state.todosTuesday.filter((item, index) => {
                            return index != payload.index
                        })
                    }
                case "wednesday":
                    return {
                        ...state, todosWednesday: state.todosWednesday.filter((item, index) => {
                            return index != payload.index
                        })
                    }
                case "thursday":
                    return {
                        ...state, todosThursday: state.todosThursday.filter((item, index) => {
                            return index != payload.index
                        })
                    }
                case "friday":
                    return {
                        ...state, todosFriday: state.todosFriday.filter((item, index) => {
                            return index != payload.index
                        })
                    }
                case "saturday":
                    return {
                        ...state, todosSaturday: state.todosSaturday.filter((item, index) => {
                            return index != payload.index
                        })
                    }
                case "sunday":
                    return {
                        ...state, todosSunday: state.todosSunday.filter((item, index) => {
                            return index != payload.index
                        })
                    }
            }

        default:
            return state
    }
}