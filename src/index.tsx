import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin'

const target = document.getElementById('app')

injectTapEventPlugin()

import App from './app'

const app = (
  <AppContainer>
    <App />
  </AppContainer>
)

ReactDOM.render(app, target)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>, target)
  })
}
