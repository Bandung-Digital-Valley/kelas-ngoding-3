import React, {useState } from 'react'
import {Form} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {addTodo, updateTodo, deleteTodo} from '../store/actions'

const TaskItem = ({item , index, day}) => {
    const dispatch = useDispatch()
    const payload = {
        day: day,
        index: index,
        isDone: !item.isDone
    }

    return( <><Form.Group className="mb-3"         controlId="formBasicCheckbox">
                <Form.Check onClick={() => {
                    dispatch(updateTodo(payload))
                    alert("data berhasil dirubah")
                    console.log("ini item yg diupdate", item)
                }} style={{textAlign:"start", fontWeight: "bold", fontSize:20}} type="checkbox" label={item.title} />
            </Form.Group>
            <button className="btn btn-warning" onClick={() => {
                dispatch(deleteTodo(payload))
            }}>done</button>
            <p style={{textAlign:"start", fontSize: 16, fontWeight:500, marginLeft: 30, marginTop:-15}}>{item.description}</p>
            </>)
}

export default TaskItem