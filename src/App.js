import React from 'react'
import './App.css'

import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import Routes from './config/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import { themeLight } from './config/theme'

import { store } from './config/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeLight}>
        <Routes></Routes>
      </ThemeProvider>
    </Provider>
  )
}

export default App
