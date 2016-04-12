import React, { Component, PropTypes } from 'react'

import NavigationBar from '../components/NavigationBar'

export default class Root extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div>
        <NavigationBar />
        <section id='middle'>
          {this.props.children}
        </section>
      </div>
    )
  }
}

Root.propTypes = {
  children: PropTypes.element.isRequired,
}
