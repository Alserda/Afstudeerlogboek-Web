import React from 'react'

import SessionName from './SessionName'

export default class NavigationBarSession extends React.Component {
  render() {
    return (
      <div className='session'>
        Ingelogd als <SessionName />
      </div>
    )
  }
}
