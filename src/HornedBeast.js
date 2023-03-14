import React from 'react';
import HornData from './HornData';

class HornedBeast extends React.Component{
  render(){
    return (
      <section>
        {HornData.map(animal=>(
          <div key = {animal._id}>
            <h2>{animal.title}</h2>
            <img src={animal.image_url} alt={animal.description} title={animal.title} width="500px" height="500px"/>
            <p>{animal.description}</p>
          </div>
        ))}
        </section>
      // <>
      // <h2>{this.props.title}</h2>
      // <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
      // <p>{this.props.description}</p>

      // </>
    );
  }
}

export default HornedBeast;