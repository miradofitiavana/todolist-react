import React from 'react'
import './App.css'

import { ThemeProvider } from 'styled-components'
import Routes from './config/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import { themeLight } from './config/theme'

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <Routes></Routes>
    </ThemeProvider>
  )
}

export default App
