import React from 'react';
//
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  //constructor with props as parameter and super props is the TEMPLATE FOR STATE TO HAPPEN
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p>{this.state.likes} Likes!</p>
        <img src={this.props.image_url} alt={this.props.description}></img>
        <Button onClick={this.needsHelp}>Help!</Button>
        <Button onClick={this.gotHelp}>I got help!</Button>
        <div>{this.state.helpMe ? 'I NEED HELP!!!' : ''}</div>
      </section>
    );
  }
}

export default HornedBeast;