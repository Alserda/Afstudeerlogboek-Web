import React from 'react';

class NavigationBarTitle extends React.Component {
  render() {
    return (
      <div className="title">
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

export default NavigationBarTitle
