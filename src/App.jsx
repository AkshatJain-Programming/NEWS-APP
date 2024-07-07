import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import NewsBox from './components/NewsBox'
function App() {

  return (
    <>
      <NavBar />
      <NewsBox/>
    </>
  )
}

export default App
