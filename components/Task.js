import React, {Component} from 'react';

export default class Task extends Component {
  render(){

    const {
      removeTask = () => {},
      key,
      children,
      value,
      onInpChange,
      className = "thisEl Class",
      checked, 
      } = this.props;

    
    return (
      <div key={key} className="td-task-wrapper">
        <input type="checkbox" id="check" value={value} checked={checked} onChange={onInpChange} />
        <label for="check" className="td-list_task">{children}</label>
        <button onClick={(event) => removeTask(event, children, className)} className="td-remove_task">x</button>  
      </div>    
    )
  }
};