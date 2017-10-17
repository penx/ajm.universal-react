import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { App } from '../shared/components'
import configureStore from '../shared/store/configureStore'
import renderHtml from './renderhtml'

function reactRouteHandler(req, res) {
  const context = {}
  const store = configureStore({})

  const reactApp = renderToString(<Provider store={store}>
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  </Provider>)

  if (context.status) {
    res.status(context.status)
  }

  if (context.url) {
    // redirect
    res.writeHead(302, {
      Location: context.url
    })
    res.end()
  } else {
    res.send(renderHtml(reactApp, store.getState()))
  }
}

export default reactRouteHandler
