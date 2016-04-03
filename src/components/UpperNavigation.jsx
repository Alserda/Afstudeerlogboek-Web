import React from 'react';

import NavigationBarSession from './NavigationBarSession.jsx'
import NavigationBarTitle from './NavigationBarTitle.jsx'
import NavigationItem from './NavigationItem.jsx'

class UpperNavigation extends React.Component {
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

export default UpperNavigation
