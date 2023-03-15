import React from 'react';
import './Header.css'


class Header extends React.Component{
  render(){
    return <h1>The Gallery of Fantastic Horns {this.props.hearts}</h1>
  }
}

export default Header;