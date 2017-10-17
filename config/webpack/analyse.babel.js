import { generateWebPackConfig } from './client.babel'

const config = generateWebPackConfig({
  analyse: true,
  minifify: true
})

export default config
