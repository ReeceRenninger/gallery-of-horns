//1st Bring in our imports
import React from 'react';
import Header from './Header';
import SelectedBeast from './SelectedBeast' // modal component
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';

//2nd Create the CLASS - will always have a RENDER method
class App extends React.Component {
  // THIS CONSTRUCTOR ALLOWS THE COMPONENT TO HOLD STATE
  constructor(props){
    super(props);
    this.state = {
      hearts: '',
      showModal: false,
      selectedBeastImg: '',
      selectedBeastDes: ''
      //either have modal grab just img and description or object
    }
  }
  // METHOD TO CHANGE STATE OF HEART ABOVE
addHearts = () => {
  this.setState({
    hearts: this.state.hearts + '😍'
  })
}

handleCloseModal = () => {
  this.setState ({
    showModal: false
  })
}

handleOpenModal = (img, description) => {
  this.setState ({
    showModal: true,
    selectedBeastImg: img,
    selectedBeastDes: description
  })
}

  render() {
    return (
      <> 
        <Header hearts={this.state.hearts}/>
        <Main 
        addHearts={this.addHearts} 
        handleOpenModal={this.handleOpenModal} 
        data={data}
        />
        <SelectedBeast 
        showModal={this.state.showModal} 
        handleCloseModal={this.handleCloseModal}
        selectedBeastDes={this.state.selectedBeastDes} 
        selectedBeastImg={this.state.selectedBeastImg}
        />
        
        <Footer/>
      </>
    )
  }
}

//3rd We export our created class for other files to import
export default App;
