import React, { Component, PropTypes } from 'react';

import NavigationItem from './NavigationItem'

export default class NavigationList extends Component {
  render() {
    const { items, plusPath } = this.props

    return (
      <div className='navigationItems'>
        <ul>
          {items.map((item, index) => {
            switch (item) {
              case 'plus':
                return (
                  <NavigationItem item={item} key={index} path={plusPath} />
                )
              default:
                return null
            }}
          )}
        </ul>
      </div>
    )
  }
}

NavigationList.propTypes = {
  items: PropTypes.array,
  plusPath: PropTypes.string,
}
