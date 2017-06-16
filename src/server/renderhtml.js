import { version } from '../../package.json'

// TODO: config, prod
const assetPath = 'http://localhost:9000'

// TODO: prod css, convert to React/Helmet?

export default function renderHtml(reactApp, state) {
  return `<!doctype html>
<html>
  <head>
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
