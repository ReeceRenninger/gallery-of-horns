// REBUILD AS A CLASS COMPONENT

//1st Bring in our imports
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//2nd Create the CLASS - will always have a RENDER method
class App extends React.Component {
  // THIS CONSTRUCTOR ALLOWS THE COMPONENT TO HOLD STATE
  constructor(props){
    super(props);
    this.state = {
      hearts: ''
    }
  }
  // METHOD TO CHANGE STATE OF HEART ABOVE
addHearts = () => {
  this.setState({
    hearts: this.state.hearts + '😍'
  })
}

  render() {
    return (
      // <></> is a fragment that can be used to return MULTIPLE children as a blank parent
      <> 
        <Header hearts={this.state.hearts}/>
        <Main addHearts={this.addHearts}/>
        <Footer/>
      </>
    )
  }
}

//3rd We export our created class for other files to import
export default App;
