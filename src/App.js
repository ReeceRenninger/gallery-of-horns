import React from 'react';
import Header from './Header';
import SelectedBeast from './SelectedBeast' // modal component
import Form from 'react-bootstrap/Form';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';

class App extends React.Component {
  // THIS CONSTRUCTOR ALLOWS THE COMPONENT TO HOLD STATE
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      showModal: false,
      selectedBeastImg: '',
      selectedBeastDes: '',
      hornAmount: '',
      sortedData: data
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
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (img, description) => {
    this.setState({
      showModal: true,
      selectedBeastImg: img,
      selectedBeastDes: description
    })
  }
  // need to update main with new information to show based off input
  handleSelect = (event) => {
    let selectedHorns = event.target.value;
    if(selectedHorns === 2){
      let hornData = data.filter(h => h.horns === 2)
      this.setState({
        data: hornData
      })
    } 
    else if(selectedHorns === 3){
      let hornData = data.filter(h => h.horns === 3)
        this.setState({
          data: hornData
        })
      } 
    else if(selectedHorns === 100){
      let hornData = data.filter(h => h.horns === 100)
      this.setState({
        data:hornData
      })
    }
    console.log(selectedHorns);
  }


  render() {
    return (
      <>
        <Header hearts={this.state.hearts} />

        <Form onInput={this.submitHandler}>
          <Form.Group >
            <Form.Select name='horn-selection' onChange={this.handleSelect}>
              <option value="">Select beasts by how many horns they have here!</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">ONE HUNDRED!</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Main
          handleSelect={this.handleSelect}
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


        <Footer />
      </>
    )
  }
}

export default App;
