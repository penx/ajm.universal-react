import reactRouteHandler from './serverapp'
import versionRouteHandler from './routes/version'

function appRouteHandler(req, res) {
  reactRouteHandler(req, res)
}

function routes(app) {
  app.get('/version', versionRouteHandler)
  app.get('*', appRouteHandler)
}

export default routes
