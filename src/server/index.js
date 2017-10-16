import express from 'express'

import routes from './routes'
import middleware from './middleware'

// TODO: config
const internalPort = 8080
const app = express()

function initialise() {
  middleware(app)
  routes(app)
}

try {
  initialise()
  app.listen(internalPort)
} catch (e) {
  // TODO: logging
  // console.log(e)
}

export default app
