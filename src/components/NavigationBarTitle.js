import React, { Component, PropTypes } from 'react';

export default class NavigationBarTitle extends Component {
  render() {
    return (
      <div className="title">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

NavigationBarTitle.propTypes = {
  title: PropTypes.string,
}
