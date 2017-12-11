import React, { Component } from "react";

import '../style/Header.css';

import {List} from "./List";

export class Header extends Component {
  render(){
    return (
      <nav className= "td-encouraging_message">
        <h1>GET IT DONE!</h1>         
        <div className= "td-lists_container">
          <List name="Lunes"/>
          <List name="Martes"/>
          <List name="Miércoles"/>
          <List name="Jueves"/>
          <List name="Viernes"/>
        </div>
      </nav>   
    )
  }
};

export default Header;