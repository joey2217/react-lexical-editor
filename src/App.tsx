import React from 'react'
import Editor from './components/Editor'
import { ThemeProvider } from './components/theme-provider'
import ModeToggle from './components/mode-toggle'

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-auto">ReactLexicalEditor</div>
          <ModeToggle />
        </div>
      </header>
      <Editor />
    </ThemeProvider>
  )
}

export default App
