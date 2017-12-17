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
          <List name="Monday"/>
          <List name="Tuesday" />
          <List name="Wednesday" />
          <List name="Thursday" />
          <List name="Friday" />
        </section>
      </div>   
  )};
}