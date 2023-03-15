import React from 'react';
import HornedBeast from './HornedBeast';
import './main.css'
import data from './data/data.json';

class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map((hornObj, index)=> {
          return <HornedBeast 
          key={index} 
          title={hornObj.title} 
          image_url= {hornObj.image_url}
          description={hornObj.description}
          addHearts = {this.props.addHearts} // HornedBeast HOUSES the images so we need to pass it down to it from the MAIN that is the parent element to it
          />
        })}
      
      </main>
    )
  }
}

export default Main;