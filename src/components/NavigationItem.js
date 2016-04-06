import React, { Component, PropTypes } from 'react'

export default class NavigationItem extends Component {
  render() {
    const { item, key, path } = this.props

    return (
      <li key={key} className={item}>
        <a href={path}></a>
      </li>
    )
  }
}

NavigationItem.propTypes = {
  item: PropTypes.string,
  key: PropTypes.number,
  path: PropTypes.string,
}
