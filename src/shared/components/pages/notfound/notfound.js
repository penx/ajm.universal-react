import React from 'react'
import { Link } from 'react-router-dom'

import styles from './notfound.css'

const NotFound = () => (
  <div className={styles.notfound}>
    <h1 className={styles.code}>404</h1>
    <h2 className={styles.name}>Error</h2>
    <p className={styles.description}>Page not found, <Link to="/">go home</Link></p>
  </div>
  )

export default NotFound
