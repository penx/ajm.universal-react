import { version } from '../../package.json'
import config from 'config'

const assetPath = config.get('assetPath')

// TODO: convert to JSX/Helmet?

export default function renderHtml(reactApp, state) {
  return `<!doctype html>
<html>
  <head>
    <link media="all" rel="stylesheet" href="${assetPath}/app.${version}.bundle.css" />
  </head>
  <body>
    <div id="app">${reactApp}</div>
    <script>
      window.clientApp = {
        state: ${JSON.stringify(state)}
      }
    </script>
    <script src="${assetPath}/vendor.${version}.bundle.js"></script>
    <script src="${assetPath}/app.${version}.bundle.js"></script>
  </body>
</html>`
}
