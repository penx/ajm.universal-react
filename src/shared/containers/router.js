import React, { PureComponent } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import NotFound from '../components/pages/notfound/notfound'
import Example from '../components/example'
import Home from '../components/pages/home/home'

import { exampleRoute, homeRoute } from '../routes'

class Router extends PureComponent {
  render() {
    return (<Switch>
      <Route exact path={homeRoute} component={Home} />
      <Route exact path={exampleRoute} component={Example} />
      <Route component={NotFound} />
    </Switch>)
  }
}

export default withRouter(Router)
