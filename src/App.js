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
      unicorn: '',
      rhino: '',
      showModal: false,
      selectedBeastImg: '',
      selectedBeastDes: '',
      hornAmount: '',
      data: data
      //either have modal grab just img and description or object
    }
  }
  // METHOD TO CHANGE STATE OF HEART ABOVE
  addEmojis = () => {
    this.setState({
      unicorn: this.state.unicorn + '🦄',
      rhino: this.state.rhino + '🦏'
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
    if (selectedHorns === '1') {
      let hornData = data.filter(h => h.horns === 1)
      this.setState({
        data: hornData
      })
    }
    else if (selectedHorns === '2') {
      let hornData = data.filter(h => h.horns === 2)
      this.setState({
        data: hornData
      })
    }
    else if (selectedHorns === '3') {
      let hornData = data.filter(h => h.horns === 3)
      this.setState({
        data: hornData
      })
    }
    else if (selectedHorns === '100') {
      let hornData = data.filter(h => h.horns === 100)
      this.setState({
        data: hornData
      })
    } else {
      let hornData = data.filter(h => h.horns >= 1)
      this.setState({
        data: hornData
      })
    }
    console.log(selectedHorns);
  }


  render() {
    return (
      <>
        <Header
          unicorn={this.state.unicorn}
          rhino={this.state.rhino}
        />
        <div id='form-styling'>
          <Form onInput={this.submitHandler}>
            <Form.Group >
              <Form.Select name='select' onChange={this.handleSelect}>
                <option value="">View Beasts by Horn(s) Amount!</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">ONE HUNDRED!</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
        <Main
          addHearts={this.addEmojis}
          handleOpenModal={this.handleOpenModal}
          data={this.state.data} // had to update this to this.state.data to allow data to be updated based off change in form value and method running to filter
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
