import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import NavigationBar from './components/NavigationBar'
import PostsView from './containers/PostsView'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <PostsView />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
