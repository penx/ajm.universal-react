import pkg from '../../../package.json'

function versionRouteHandler(req, res) {
  res.send(pkg.version)
}

export default versionRouteHandler
