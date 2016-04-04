import React from 'react'

export default class NavigationItem extends React.Component {
  render() {
    const { item, key, path } = this.props

    return (
      <li key={key} className={item}>
        <a href={path}></a>
      </li>
    )
  }
}
