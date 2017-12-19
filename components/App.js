import React, {Component} from 'react';

import Header from './Header';
import List from './List';

import '../style/App.css';


export default class App extends Component {
  render(){
    return(
      <div>
        <Header click={(event, value, elClass) => {}}>GO FOR IT!</Header>
        <section className="tdl-main-section">
          {this.state.lists.map((list, idx, lists) => <List key={idx} newListName={this.newListName.bind(this, idx, list, lists)} submitName={this.submitName.bind(this, idx, list, lists)} name={this.state.lists[idx].name} changeListName={this.changeListName.bind(this, idx, list, lists)}/> )}
        </section>
      </div>   
  )};

  state = {
    lists: [{name: "Monday"},{name: "Tuesday"},{name: "Wednesday"},{name: "Thursday"},{name: "Friday"},{name: "Saturday"},{name: "Sunday"}],
  }

  changeListName(index, list, lists, event) {

    let newArr = this.state.lists.slice();
    newArr[index].name = "";

  this.setState({
    lists: newArr
  });
}

  newListName(index, list, lists, event){
    let newArr = this.state.lists.slice();

    newArr[index].name = event.target.value;

  this.setState({
    lists: newArr
  });  
  }

  submitName(index, list, lists, event){
    if(event.keyCode === 13){event.target.blur()}
  }
}