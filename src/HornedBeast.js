import React from 'react';

class HornedBeast extends React.Component{
  render(){
    return (
      <>
      <h2>{this.props.titleOne}</h2>
      <img src="bullhorns.jpg">{this.props.imageurl}</img>
      <p>{this.props.descriptionOne}</p>

      <h2>{this.props.titleTwo}</h2>
      <img></img>
      <p>{this.props.descriptionTwo}</p>
      </>
    )
  }
}

export default HornedBeast;