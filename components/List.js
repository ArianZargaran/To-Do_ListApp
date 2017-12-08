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



      {this.state.tasks.map((task, idx) => (
      <div key={idx}>
        <p className="td-list_task">&nbsp;<input type="checkbox" />{task.text}&nbsp;<button className="td-remove_task" onClick={this.removeTask.bind(this)}>x</button></p>
      </div>
      ))}  


    </div>            
  )};

  state = {
    tasks: [],
    inputValue: ""
  };

  onChange(event){
    this.setState({
      inputValue: event.target.value
    });
  }

  onButtonClick(){
    const newArr = this.state.tasks.slice(0);
    newArr.length < 12 ? newArr.push({text: this.state.inputValue}) : alert("Try to accomplish your actual tasks instead of creating a new one");
    
    this.setState({
      tasks: newArr,
      inputValue: ""
    });
  };

  removeTask(element){
    this.setState({
      tasks: []
    });
  }
}


export default List
