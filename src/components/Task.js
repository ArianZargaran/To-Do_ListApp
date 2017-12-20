import React, {Component} from 'react';

import '../style/Task.css'

export default class Task extends Component {
  render(){

    const {
      removeTask = () => {},
      key,
      children,
      onInpChange,
      className,
      checked, 
      } = this.props;

    
    return (
      <div key={key} className="td-task-wrapper">
        <input className="td-task-input" type="checkbox" id={key} checked={checked} onChange={onInpChange}/>
        <label onClick={onInpChange} htmlFor={key} className="td-list_task">{children}</label>
        <button onClick={(event) => removeTask(event, children, className)} className="td-remove_task">x</button>  
      </div>    
    )
  }
};