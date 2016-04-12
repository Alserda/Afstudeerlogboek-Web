import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  render() {
    const { type } = this.props
    return (
      <div className={`icon ${type}`} />
    )
  }
}

Icon.propTypes = {
  type: PropTypes.string,
}
