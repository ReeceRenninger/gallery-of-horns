import React from 'react';
import data from './data/data.json'; //
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component{
  //constructor with props as parameter and super props is the TEMPLATE FOR STATE TO HAPPEN
  constructor(props){
    super(props);
    this.state= {
      likes: 0,
      helpMe: false
    }
  }

  // METHOD TO UPDATE LIKES FOR EACH HORN PICTURE
handleLikes = () => {
  // react method called this.setState() -> takes in an object and rebuilds that state object
  this.setState({
    likes: this.state.likes + 1
  })
}

// METHOD TO UPDATE STATE OF HELPME -> this will change helpMe to true if invoked
needsHelp = () => {
  this.setState({
    helpMe: true
  })
}

gotHelp = () => {
  this.setState({
    helpMe: false
  })
}
  render(){
    return (
      <section>
        {data.map(horn =>(
          <div key = {horn._id}>
            <h2>{horn.title}</h2>
            <Button onClick={this.handleLikes}>Click me to Like!</Button>
            <p>{this.state.likes} Likes!</p>
            <img src={horn.image_url} alt={horn.description} title={horn.title} width="500px" height="500px"/>
            <p>{horn.description}</p>
          </div>
        ))}
        <Button onClick={this.needsHelp}>Help!</Button>
        <Button onClick={this.gotHelp}>I got help!</Button>
        <div>{this.state.helpMe ? 'I NEED HELP!!!' : ''}</div>
        </section>
      // <>
      // <h2>{this.props.title}</h2>
      // <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
      // <p>{this.props.description}</p>

      // </>
    );
  }
}

export default HornedBeast;