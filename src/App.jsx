import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from './components/Appheader'
import AppFooter from './components/AppFooter'
import AppMain from './components/AppMain'

function App() {


  return (
    <>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </>
  )
}

export default App
