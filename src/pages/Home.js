import React, {useState } from 'react'

import { useSelector } from 'react-redux'

import AddTaskComponent from '../components/AddForm'
import TaskItem from '../components/TaskItem'
function Home(){
    const todosMonday = useSelector(state => state.todosMonday)
    const todosTuesday = useSelector(state => state.todosTuesday)
    const todosWednesday = useSelector(state => state.todosWednesday)
    const todosThursday = useSelector(state => state.todosThursday)
    const todosFriday = useSelector(state => state.todosFriday)
 
    const [isAdd, setAdd] = useState(false)
    return(<div className="container">
        <div className="col-sm-3" style={{marginTop:"3vh"}}>
            <button onClick={() => setAdd(!isAdd)} className="btn btn-light">{isAdd? "Hide": "Add Task"}</button>
        </div>
        { isAdd  && <AddTaskComponent setAdd={setAdd}/>}
        <div style={{fontFamily:"Inter, sans-serif", marginLeft:123, marginTop:"70px"}}>

            {/* MONDAY */}
           { todosMonday.length > 0 && <p style={{textAlign:"start", fontFamily:"IBM Plex Sans, sans-serif", fontWeight:"500", fontSize: 13}}>Monday</p>}
           {
               todosMonday.map((item, index) => {
                   return (<TaskItem day="monday" key={index} index={index} item={item} />)
               })
           }

           {/* TUESDAY */}
           { todosTuesday.length > 0 && <p style={{textAlign:"start", fontFamily:"IBM Plex Sans, sans-serif", fontWeight:"500", fontSize: 13}}>Tuesday</p>}
           {
               todosTuesday.map((item, index) => {
                   return (<TaskItem day="tuesday" key={index} index={index} item={item} />)
               })
           }
           {/* WEDNESDAY */}
           { todosWednesday.length > 0 && <p style={{textAlign:"start", fontFamily:"IBM Plex Sans, sans-serif", fontWeight:"500", fontSize: 13}}>Wednesday</p>}
           {
               todosWednesday.map((item, index) => {
                   return (<TaskItem day="wednesday" key={index} index={index} item={item} />)
               })
           }
           {/* THURSDAY */}
           { todosThursday.length > 0 && <p style={{textAlign:"start", fontFamily:"IBM Plex Sans, sans-serif", fontWeight:"500", fontSize: 13}}>Thursday</p>}
           {
               todosThursday.map((item, index) => {
                   return (<TaskItem day="thursday" key={index} index={index} item={item} />)
               })
           }
           {/* FRIDAY */}
           { todosFriday.length > 0 && <p style={{textAlign:"start", fontFamily:"IBM Plex Sans, sans-serif", fontWeight:"500", fontSize: 13}}>Friday</p>}
           {
               todosFriday.map((item, index) => {
                   return (<TaskItem day="thursday" key={index} index={index} item={item} />)
               })
           }
          
        </div>
    </div>)
}
export default Home





