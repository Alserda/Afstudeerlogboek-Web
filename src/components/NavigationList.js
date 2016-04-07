import React, { Component, PropTypes } from 'react';

import NavigationItem from './NavigationItem'

export default class NavigationList extends Component {
  constructor() {
    super()
    this.state = {
      navigationItems: [],
    }
  }

  componentDidMount() {
    this.returnNavigationItems()
  }

  returnNavigationItems() {
    const { items, plusPath } = this.props
    const retrievedNavigationItems = []

    items.map((item, index) => {
      switch (item) {
        case 'plus':
          retrievedNavigationItems.push(<NavigationItem item={item} key={index} path={plusPath} />)
          return null
        default:
          return null
      }
    })

    this.setState({
      navigationItems: retrievedNavigationItems,
    })
  }

  render() {
    return (
      <div className='navigationItems'>
        <ul>
          {this.state.navigationItems}
        </ul>
      </div>
    )
  }
}

NavigationList.propTypes = {
  items: PropTypes.array,
  plusPath: PropTypes.string,
}
