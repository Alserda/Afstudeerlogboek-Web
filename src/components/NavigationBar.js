import React from 'react';

import NavigationBarSession from './NavigationBarSession'
import NavigationBarTitle from './NavigationBarTitle'
import NavigationList from './NavigationList'

export default class NavigationBar extends React.Component {
  render() {
    const navigationList = [
      { item: 'plus', path: 'https://www.google.nl' },
      { item: 'henk', path: 'http://peter.al' },
    ]

    return (
      <nav className='navigationBar'>
        <NavigationBarSession />
        <NavigationBarTitle title='Dit is een titel' />
        <NavigationList items={navigationList} />
      </nav>
    )
  }
}
