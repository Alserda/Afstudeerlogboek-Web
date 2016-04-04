import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import UpperNavigation from './components/UpperNavigation'
import LogbookPosts from './components/LogbookPosts'

class App extends Component {
  render() {
    return (
      <div>
        <UpperNavigation />
        <LogbookPosts />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
