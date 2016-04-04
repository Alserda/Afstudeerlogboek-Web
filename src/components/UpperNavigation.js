import React from 'react';

import NavigationBarSession from './NavigationBarSession'
import NavigationBarTitle from './NavigationBarTitle'
import NavigationItem from './NavigationItem'
import NavigationList from './NavigationList'

export default class UpperNavigation extends React.Component {
  render() {
    return (
      <nav className="navigationBar">
        <NavigationBarSession />
        <NavigationBarTitle title="Dit is een titel" />
        <NavigationList items={["plus", "henk"]} plusPath="https://www.google.nl" />
      </nav>
    )
  }
}
