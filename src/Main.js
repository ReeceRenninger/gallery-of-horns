import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title="Dried Out Skeleton Horns" imageUrl="https://images.unsplash.com/photo-1523215887625-196ed74db8af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" description="dried out bone skeleton horns" />

        <HornedBeast title="Decorative Bull Horns" imageUrl="https://images.unsplash.com/photo-1597333119576-acbc21a168fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" description="gold skull with designs and black horns" />
        {/* <Hornedbeast title="" description="" imageurl=""/> */}
      </>
    )
  }
}

export default Main;