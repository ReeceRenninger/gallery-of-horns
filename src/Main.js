import React from 'react';
import HornedBeast from './HornedBeast';
import './main.css'


class Main extends React.Component {

  render() {
    return (
      <main>
        {this.props.data.map((hornObj)=> {
          return <HornedBeast 
          key={hornObj._id} 
          title={hornObj.title} 
          image_url= {hornObj.image_url}
          description={hornObj.description}
          addHearts = {this.props.addHearts} 
          // HornedBeast HOUSES the images so we need to pass it down to it from the MAIN that is the parent element to it
          handleOpenModal = {this.props.handleOpenModal}
          />
        })}
      
      </main>
    )
  }
}

export default Main;