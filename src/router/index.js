import React from 'react'
import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router'

import App from '../components/App'
import Homepage from '../components/homepage/Homepage'
import Graphpage from '../components/graphpage/Graphpage'

export default (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Homepage } />
      <Route path="graph" component={ Graphpage } />
    </Route>
  </Router>
)
