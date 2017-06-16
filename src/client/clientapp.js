import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { App } from '../shared/components'
import configureStore from '../shared/store/configureStore'

const state = window.clientApp.state
const store = configureStore(state, window.clientAppConfig)

class ClientApp extends React.Component {
  render() {
    return (<Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>)
  }
}

export default ClientApp
