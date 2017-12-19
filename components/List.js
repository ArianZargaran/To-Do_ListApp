import React, {Component} from 'react';

import '../style/List.css';

import Task from './Task';



export default class List extends Component {
  render(){

    const {
      changeListName,
      newListName,
      submitName,
      value = this.props.name,
      placeholder = `New task on ${value}`,
    } = this.props;

    const percentageFeatureStyle = {
      opacity: (this.state.tasks.length),
      transition: 'opacity .5s',
      WebkitTransition: 'opacity .5s',
      msTransition: 'opacity .5s'
    }

    const percentageBarStyle = {
      width: `${this.state.percentage}%`,
      transition: 'width .5s',
      WebkitTransition: 'width .5s',
      msTransition: 'width .5s'
    };

    return (
      <div className="td-list_container">

        <input value={value} className="td-list_name" onKeyUp={(event) => submitName(event)} onChange={(event)=> newListName(event, {value})} onDoubleClick={(event)=> changeListName(event)}/>

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
            className="td-list_add_cta">Add task</button>
        </div>

        <div className="td-task-box">
          {this.state.tasks.map((task, idx, tasks) => (<Task checked={task.status} key={idx} onInpChange={this.onInputChange.bind(this, task, {idx},tasks)} removeTask={this.removeThisTask.bind(this, {idx}.idx)}>{task.text}</Task>))}
        </div>

        <div className="td-list_info" style={percentageFeatureStyle}>
          <p>{`${this.state.percentage}% tasks completed`}</p>
          <div className='td-list_info_bar' style={percentageBarStyle}></div>
        </div> 
    </div>
  )};

  state = {
    tasks: [],
    inputValue: "",
    percentage: 0,
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
    if (!arr.length) { calculatePercentage = 0 }
    this.setState({
      percentage: calculatePercentage, 
    });
  };
};