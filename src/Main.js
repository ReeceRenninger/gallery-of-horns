import React from 'react';
import HornedBeast from './HornedBeast';
import Footer from './Footer';

class Main extends React.Component {
  render(){
   return(
    <>
     <HornedBeast titleOne = "First Image" descriptionOne = "First image description"/>
     <HornedBeast titleTwo = "Second Image" descriptionTwo ="Second image description"/>
  {/* <Hornedbeast title="" description="" imageurl=""/> */}
  </>
   )
  }
}

export default Main;