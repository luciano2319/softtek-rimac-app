import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesConfig from './routes/Routes'
import Footer from './components/Footer'
import './App.scss'
import Header from './components/Header'
import { UserProvider } from './components/providers'

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <main>
          <RoutesConfig />
        </main>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App