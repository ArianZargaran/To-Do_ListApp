import React from "react";

import '../style/List.css';

export class List extends React.Component {
  render(){
    return (
    <div className="td-list_container">    
      <h5 className="td-list_name">{this.props.name}</h5>

      <div className ="td-list_add_task_box">
        <input 
          type="text" 
          className ="td-list_add_field" 
          value={this.state.inputValue} 
          onChange={this.onChange.bind(this)}
        />
        <button onClick={this.onButtonClick.bind(this)}
          className ="td-list_add_cta">Add new task</button>
      </div>

      <div className ="td-task_box">
        {this.state.tasks.map((task, idx) => (
        <div key={idx} className="td-task-wrapper">  
            <input type="checkbox" id="check" ckecked/>
            <label for="check" className="td-list_task">{task.text}</label>
            <button className="td-remove_task" onClick={this.removeTask.bind(this, {idx})}>x</button>
        </div> 
      ))}
      </div> 
    </div>            
  )};

  state = {
    tasks: [],
    inputValue: " ",
  };

  onChange(event){
    this.setState({
      inputValue: event.target.value
    });
  }

  onButtonClick(){
    const newArr = this.state.tasks.slice(0);
    newArr.length < 10 ? newArr.push({text: this.state.inputValue}) : alert("Try to accomplish your actual tasks instead of creating a new one");
    
    this.setState({
      tasks: newArr,
      inputValue: "",
    });
  };

  removeTask(arrIdx){
    const newArr = this.state.tasks.splice(0);
    
    if (arrIdx.idx > -1) {
      newArr.splice(arrIdx.idx, 1);
    }


    this.setState({
      tasks: newArr,
    });
  }
}


export default List
