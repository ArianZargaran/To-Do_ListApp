import React, {Component} from 'react';

import '../style/List.css';

import Task from './Task';



export default class List extends Component {
  render(){

    const {
      name = 'Your list name',
      placeholder = `New task on ${name}`,
    } = this.props;

    const divStyle = {
      width: `${this.state.percentage}%`,
      transition: 'width 2s',
      WebkitTransition: 'width .5s',
      msTransition: 'width .5s'
    };

    return (
      <div className="td-list_container">
        <h5 className="td-list_name">{name}</h5>

        <div className="td-list_add_task_box">
          <input
            type="text"
            className="td-list_add_field"
            value={this.state.inputValue}
            onChange={this.onChange.bind(this)}
            placeholder= {placeholder}
            onKeyUp={(e) => {if(e.keyCode === 13){this.onButtonClick.call(this)}}}
          />
          <button 
            onClick={this.onButtonClick.bind(this)}
            className="td-list_add_cta">Add new task</button>
        </div>

        <div className="td-task-box">
          {this.state.tasks.map((task, idx, tasks) => (<Task checked={task.status} key={idx} onInpChange={this.onInputChange.bind(this, task, {idx},tasks)} removeTask={this.removeThisTask.bind(this, {idx}.idx)}>{task.text}</Task>))}
        </div>

        <div className="td-list_info">
          <p>{`${this.state.percentage}% tasks completed`}</p>
          <div className='td-list_info_bar' style={divStyle}></div>
        </div> 
    </div>
  )};

  state = {
    tasks: [],
    inputValue: '',
    percentage: 100,
  };

  onChange(event){
    this.setState({
      inputValue: event.target.value
    })
  };


  onButtonClick() {
    const newArr = this.state.tasks.slice(0);

    if(this.state.inputValue) {
      newArr.length < 10 ? newArr.push({ text: this.state.inputValue, status: false }) : alert("Try to accomplish your actual tasks instead of creating a new one");
    }

    this.calcPercentage.call(this, newArr)

    this.setState({
      tasks: newArr,
      inputValue: "",
    });
  };


  onInputChange(tarea, indice, tareas) {
    if (tarea.status) { tarea.status = false } else { tarea.status = true }

    this.calcPercentage.call(this, tareas)

    this.setState({
      tasks: tareas,   
    });
  }


  removeThisTask(arrIdx) {
    const newArr = this.state.tasks.splice(0);

    if (arrIdx > -1) {
      newArr.splice(arrIdx, 1);
    }
    this.calcPercentage.call(this, newArr)

    this.setState({
      tasks: newArr,    
    });
  }

  calcPercentage(arr) {
    let counter = 0;
    for(var i = 0; i < arr.length; i++) {if(arr[i].status){counter++}}

    let calculatePercentage = (counter/arr.length * 100).toFixed()
    if (!arr.length) { calculatePercentage = 100 }
    this.setState({
      percentage: calculatePercentage 
    });
  };


};