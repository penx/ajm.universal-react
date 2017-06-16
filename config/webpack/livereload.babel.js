import { generateWebPackConfig } from './client.babel'

export default generateWebPackConfig({
  liveReload: true,
  devServer: true
  devtool: 'cheap-module-eval-source-map'
})
