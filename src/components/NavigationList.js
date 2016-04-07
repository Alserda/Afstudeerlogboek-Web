import React, { Component, PropTypes } from 'react';

import NavigationItem from './NavigationItem'

export default class NavigationList extends Component {
  render() {
    const itemComponents = this.props.items.map((item, index) => (
      <NavigationItem key={index} {...item} />
    ));

    return (
      <div className='navigationItems'>
        <ul>
          {itemComponents}
        </ul>
      </div>
    )
  }
}

NavigationList.propTypes = {
  items: PropTypes.array,
}
