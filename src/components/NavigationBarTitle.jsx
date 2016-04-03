import React from 'react';

class NavigationBarTitle extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default NavigationBarTitle
