import React from "react";
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component{

  render(){
    return(
    <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>{this.props.selectedBeastDes}</Modal.Header>
        <Modal.Body>
        <img width='448px' height='448px'src={this.props.selectedBeastImg} alt={this.props.selectedBeastDes}/>
        </Modal.Body>
        
        </Modal>
    </>
    )
  }
}



export default SelectedBeast;

