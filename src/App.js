import React, {Component} from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

class App extends Component {

  idCounter = 1;

  state = {
    tasks: [
      {
        id: 0,
        taskName:  "Create game in C++",
        priority: false,
        date: '2024-07-11',
        active: true,
        finishDate: null
      }
    ],
    
    error: false,
  }

deleteTask = (id)=> {
  //delete clicked element with id.
  let tasks = [...this.state.tasks];

  //I WAY
  const index = tasks.findIndex(task => task.id === id);
  tasks.splice(index, 1)
  this.setState({
    tasks: tasks
  })

  //II WAY
  // tasks = tasks.filter(task => task.id !== id)
  // this.setState({
  //   tasks: tasks
  // })
}

changeTaskStatus = (id)=> {
  let tasks = Array.from(this.state.tasks)
  tasks.forEach(task => {
    if(task.id === id){
      task.active = false
      task.finishDate = new Date().getTime()
    }
  })
  this.setState({
    tasks: tasks
  })
}

handleAddTask = (taskName, priority, date)=> {
  if(this.state.error){
    return null
  } else {
    const task = {
      id: this.idCounter,
      taskName:  taskName,
      priority: priority,
      date: date,
      active: true,
      finishDate: null,
      error: false
    }
    this.idCounter++
  
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task] 
    }))
  
    return true
  }
}

  render(){
    return (
      <div className="app-wrapper">
        <h1 className="main-title">To Do Application</h1>
        <AddTask handleAddTask={this.handleAddTask}
        />
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} changeTaskStatus={this.changeTaskStatus}/>
      </div>    
    );
  }
}

export default App;