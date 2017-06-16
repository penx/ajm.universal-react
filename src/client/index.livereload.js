import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import ClientApp from './clientapp'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(ClientApp)

// TODO: https://github.com/gaearon/react-hot-loader/tree/next/docs#webpack-2
if (module.hot) {
  module.hot.accept()
}
