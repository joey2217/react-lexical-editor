import React from 'react'
import Editor from './components/Editor'
import { ThemeProvider } from './components/theme-provider'
import ModeToggle from './components/mode-toggle'

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header>
        <ModeToggle />
      </header>
      <Editor />
    </ThemeProvider>
  )
}

export default App
