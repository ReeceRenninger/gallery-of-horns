import React from "react";
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component{
constructor(props){
  super(props);
  this.state = {
    
  }
}




  render(){
    return(
    <>
        <Modal show={this.props.showModal} onHide={this.handleCloseModal}>
        <Modal.Header closeButton>{this.props.selectedBeast}</Modal.Header>
        <Modal.Body>
          <p>{this.props.description}</p>
        </Modal.Body>
        
        </Modal>
    </>
    )
  }
}



export default SelectedBeast;

