import React from 'react';
import '../App.css';

const Task = (props)=> {

  const importantTaskColor = {
    color: 'rgb(255, 21, 68)',
  }

  const finishTerm = new Date(props.task.finishDate).toLocaleString()

  if(props.task.active === true && !props.error){
    return(
      <li className="singleTask-container">
        <h3 className="singleTask" style={props.task.priority ? importantTaskColor : null}>Task no. {props.task.id + 1} {props.task.taskName}</h3><span className="deadline-value">- deadline: {props.task.date}</span>
        <button className="btnDone" onClick={()=> props.changeTaskStatus(props.task.id)}>This Task Is Done</button>
        <button className="btnRemove" onClick={()=> props.deleteTask(props.task.id)}>X</button>
      </li>  
    )
  }
  else {
    return(
      <li className="singleTask-container">
        <h3 className="singleTask">Task no. {props.task.id + 1} {props.task.taskName}</h3><em style={{fontSize: "13px"}}> (deadline: {props.task.date})</em>
        <br/>
        - Done: <span>{finishTerm}</span>

        <button className="btnRemove" onClick={()=> props.deleteTask(props.task.id)}>X</button>
      </li>
    )
  }}

export default Task;