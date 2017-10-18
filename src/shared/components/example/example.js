import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Example = ({ example }) => (<div>
  <h2>Example Component</h2>
  <p>Prop: {example}</p>
  <Link to="/">Home</Link>
</div>)

Example.propTypes = {
  example: PropTypes.string
}

Example.defaultProps = {
  example: null
}

export default Example
