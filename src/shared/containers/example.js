import { withMatchState } from 'react-router-redux-utils'
import Example from '../components/example/example'

export default withMatchState(Example, {
  routerParam: 'exampleId',
  stateLocation: 'example',
  propName: 'example'
})
