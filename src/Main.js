import React from 'react';
import HornedBeast from './HornedBeast';
import './main.css'
import data from './data/data.json';

class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map((hornObj, index)=> {
          return <HornedBeast key={index} title={hornObj.title} image_url= {hornObj.image_url}
          description={hornObj.description}/>
        })}
      
      </main>
    )
  }
}

export default Main;