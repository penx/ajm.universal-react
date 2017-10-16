import renderHtml from './renderhtml'

function reactRouteHandler(req, res) {
  res.send(renderHtml())
}

export default reactRouteHandler
