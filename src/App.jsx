import React from 'react'
import './app.css'
import { Routes, Route, Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Home from './routes/Home'
import AppBarMenu from './components/AppBarMenu'
import Place from './routes/Place'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBarMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Place />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}
export default App
