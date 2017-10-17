import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import styles from './app.css'

import Router from '../../containers/router'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Helmet>
          <title>React Universal Template</title>
        </Helmet>
        <h1>React Universal Template</h1>
        <Router />
      </div>
    )
  }
}

export default App
