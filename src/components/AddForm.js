import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addTodo } from '../store/actions'

const AddTaskComponent = (iniProps) => {

    const { setAdd } = iniProps
    const [day, setDay] = useState("monday")
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const dispatch = useDispatch()
    const todosMonday = useSelector(state => state.todosMonday)
    const payload = {
        day: day,
        todo: {
            title: title,
            description: description,
            isDone: false
        }
    }
    return (<div className="col-sm-6">
    <p>Task Title</p>
     <input type="text" onChange={e => setTitle(e.target.value)} /><br/><br/>
    <p >Task Description</p>
     <input type="text"  onChange={e => setDescription(e.target.value)}/><br/><br/>
    <p>Day</p>
     <select onChange={e => setDay(e.target.value.toLowerCase())}>
         {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(el => {
             return (<option key={el} >{el}</option>)
         })
         
         }
         
     </select><br/><br/>
     <button onClick={() => {
         dispatch(addTodo(payload))
         alert("task berhasil ditambah")
         console.log(todosMonday)
        setAdd(false)
     }}>Add</button>
    </div>)
}

export default AddTaskComponent