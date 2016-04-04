import React, { Component } from 'react';

import NavigationItem from './NavigationItem'

export default class NavigationList extends Component {
  render() {
    const { items, plusPath } = this.props

    return (
      <div className="navigationItems">
        <ul>
          {items.map(function(item, index) {
            {switch(item) {
              case "plus":
                return (
                  <NavigationItem item={item} key={index} path={plusPath} />
                )
              default:
                console.log(item, " zit er niet in")
            }}
          })}
        </ul>
      </div>
    )
  }
}
