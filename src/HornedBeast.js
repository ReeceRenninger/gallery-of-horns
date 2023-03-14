import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css'

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
      <Card style={{ width: '28rem' }}>
        <p>{this.state.likes} 🖤 Likes!</p>
        <Card.Img src={this.props.image_url} alt={this.props.description}/>
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Button variant="info" onClick={this.handleLikes}>Favorite</Button>
        {/* <Button variant="danger" onClick={this.needsHelp}>Help!</Button>
        <Button variant="success" onClick={this.gotHelp}>I got help!</Button>
        <div>{this.state.helpMe ? 'I NEED HELP!!!' : ''}</div> */}
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;