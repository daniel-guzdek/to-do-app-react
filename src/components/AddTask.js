import React from 'react'
import '../App.css'

class AddTask extends React.Component {
    
    minDate = new Date().toISOString().slice(0, 10);

    info = {
        empty_input: "Please, write your task to do"
      }

    state = {
        taskName: '',
        priority: false,
        date: this.minDate,
        error: false,
    }

    handleGetTask = (e)=> {
        const inputValue = e.target.value
        this.setState({
          taskName: inputValue
        })
      }

      handlePriorityChange = (e)=> {
        let checked = e.target.checked;
        this.setState({
          priority: checked
        })
      }

      handleChangeDate = (e)=> {
        this.setState({
            date: e.target.value
        })
    }

      handleAddClick = ()=> {
          const {taskName, priority, date} = this.state;
          
          if (this.state.taskName === "") {
            this.setState({
                error: true,
                taskName: '',
                priority: false,
                date: this.minDate,
            })
          } if (this.state.taskName !== "") {
            this.setState({
                error: false,
                taskName: '',
                priority: false,
                date: this.minDate,
            })
            this.props.handleAddTask(taskName, priority, date)
          } 
           if(!this.state.error) {
              this.setState({
                  taskName: '',
                  priority: false,
                  date: this.minDate,
              })
          }
      }

    render(){
        let maxDate = this.minDate.slice(0, 4)*1 + 5
        maxDate = maxDate + "-12-31" //2025-12-31

        return(
            <React.Fragment>
                <h2 className="main-subtitle">Add Task to The List</h2>
                <input type="text" id="tasksInput" placeholder="write a task to add ..." value={this.state.taskName} onChange={this.handleGetTask}/>
                <label htmlFor="priority" className="priority-label"><input type="checkbox" checked={this.state.priority} id="priority" onChange={this.handlePriorityChange}/>Priority</label>
                <br/>
                {this.state.error ? <span style={{color: `rgb(255, 21, 68)`, fontSize: "13px", marginLeft: 0}}>{this.info.empty_input}</span> : null}
                <br/>
                <label className="dateLabel" htmlFor="deadlineDate">Set deadline</label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleChangeDate}/>
                <br/>
                <button className="btnAdd" onClick={this.handleAddClick}>Add</button>
            </React.Fragment>
        )
    } 
}

export default AddTask;