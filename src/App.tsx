import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesConfig from './routes/Routes'
import Footer from './components/Footer'
import './App.scss'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <RoutesConfig />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App