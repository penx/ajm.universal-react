import React, { Component } from 'react'

import styles from './app.css'

import Router from '../../containers/router'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h1>Initial Application</h1>
        <Router />
      </div>
    )
  }
}

export default App
