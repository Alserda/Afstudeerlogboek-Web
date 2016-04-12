import { Route, IndexRoute } from 'react-router'
import React from 'react'

import Root from '../containers/Root';
import PostsView from '../containers/PostsView';
import GridView from '../containers/GridView';


export default (
  <Route path='/' component={Root}>
    <IndexRoute component={PostsView} />
    <Route path='gridview' component={GridView} />
  </Route>
)
