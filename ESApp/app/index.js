const React = require('react-native')
const {
  Component,
} = React
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'
const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
