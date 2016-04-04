import React from 'react';

import NavigationBarSession from './NavigationBarSession'
import NavigationBarTitle from './NavigationBarTitle'
import NavigationItem from './NavigationItem'

export default class UpperNavigation extends React.Component {
  render() {
    return (
      <nav className="navigationBar">
        <NavigationBarSession />
        <NavigationBarTitle title="Dit is een titel" />
        <div className="navigationItems">
          <NavigationItem items={["plus", "henk"]} plusLinkTo="https://www.google.nl" />
        </div>
      </nav>
    )
  }
}
