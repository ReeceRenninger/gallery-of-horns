import React from 'react';
import './Header.css'


class Header extends React.Component{
  render(){
    return <h1 >{this.props.unicorn}The Gallery of Fantastic Horns {this.props.rhino}</h1>
  }
}

export default Header;