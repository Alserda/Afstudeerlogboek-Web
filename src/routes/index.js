import { Route } from 'react-router'
import React from 'react'

import GridView from '../containers/GridView';


export default (
  <Route path='/'>
    <Route path='grid' component={GridView} />
  </Route>
)
