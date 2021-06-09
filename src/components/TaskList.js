import React from 'react';
import '../App.css';
import Task from './Task';

const TaskList = (props)=> {

    const active = props.tasks.filter(task => task.active === true);
    const done = props.tasks.filter(task => !task.active);

    done.sort((a, b) => b.finishDate - a.finishDate);

    const activeTasks = active.map(task => <Task key={task.id} task={task} deleteTask={props.deleteTask} changeTaskStatus={props.changeTaskStatus}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} deleteTask={props.deleteTask} changeTaskStatus={props.changeTaskStatus}/>)

    return(
        <>
        <div className="tasks-active">
            <ul>
                <h2>Your Task's To Do: <em className="numberOfActiveTasks">({active.length})</em></h2>
                {activeTasks.length > 0 ? activeTasks : <p>You don't have new Tasks</p>}
            </ul>
        </div>
        <div className="tasks-done">
            <ul>
                <h2>Tasks Done: <em className="numberOfDoneTasks">({done.length})</em></h2>
                {doneTasks.length > 5 && <span style={{ fontSize: "10px" }}>Only the last 5 tasks are displayed</span>}
                {doneTasks.slice(0, 5)}
            </ul>
        </div>
        </>
    )
}

export default TaskList;