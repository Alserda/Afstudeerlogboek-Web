import React from 'react';

import NavigationBarSession from './NavigationBarSession.jsx'
import NavigationBarTitle from './NavigationBarTitle.jsx'
import NavigationBarRightMenu from './NavigationBarRightMenu.jsx'

class UpperNavigation extends React.Component {
  render() {
    return (
      <nav className="navigationBar">
        <NavigationBarSession />
        <NavigationBarTitle title="Dit is een titel" />
        <NavigationBarRightMenu />
      </nav>
    )
  }
}

export default UpperNavigation
