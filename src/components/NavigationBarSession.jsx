import React from 'react';

import SessionName from './SessionName.jsx'

class NavigationBarSession extends React.Component {
  render() {
    return (
      <div className="session">
        Ingelogd als <SessionName />
      </div>
    )
  }
}

export default NavigationBarSession
