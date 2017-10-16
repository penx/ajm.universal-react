import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { App } from './components'
import configureStore from './store/configureStore'

const store = configureStore({}, window.clientAppConfig)

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
