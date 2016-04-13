import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { createHistory, useBasename } from 'history';

import routes from './routes'

const target = document.getElementById('app')
const history = createHistory()

render(
  <Router routes={routes} history={history} />,
  target
);

