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
  // needsHelp = () => {
  //   this.setState({
  //     helpMe: true
  //   })
  // }

  // gotHelp = () => {
  //   this.setState({
  //     helpMe: false
  //   })
  // }

  // CANT EVER INVOKE ON A ONCLICK SO YOU MUST CREATE A HELPER FUNCTION TO CALL IT
  // handler that calls open modal and requires an argument
handleImgClick = () => {
  this.props.handleOpenModal(this.props.image_url, this.props.description)
}

  render() {
    return (
      <Card style={{ width: '28rem' }}>
        <Card.Img onClick={this.handleImgClick} src={this.props.image_url} alt={this.props.description}/>
        <Card.Body>
        <Card.Title onClick={this.props.addHearts}>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Button variant="info" onClick={this.handleLikes} >Favorite</Button>
        <p>{this.state.likes} 🖤 Likes!</p>
        {/* <Button variant="danger" onClick={this.needsHelp}>Help!</Button>
        <Button variant="success" onClick={this.gotHelp}>I got help!</Button>
        <div>{this.state.helpMe ? 'I NEED HELP!!!' : ''}</div> */}
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;