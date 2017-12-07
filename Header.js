import React from 'react';

import {Home} from "./Home"

export class Header extends React.Component {
  render(){
    return (
      <nav className= "navbar navbar-default">
        <div className="container">
          <ul className= "nav navbar-nav">
            <li>Home (I am the first element on component #2)</li>
            <li>Portfolio (I am in component #2)</li>
            <li>Here ends component #2</li>
            <li><Home /></li>
          </ul>
        </div>
      </nav>  
    )
  }
}
