import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone'

import logo from '../../assets/logo-rimac.svg'
import './Header.scss'


const Header = () => {
  return (
    <header>
        <div className='header-container'>
          <img className='logo' src={logo} alt='logo' />
          <div className='contact'>
            <p className='sales'>¡Compra por este medio! <span><PhoneIcon /> <strong>(01) 411 6001</strong></span></p>
          </div>
        </div>
    </header>
  )
}

export default Header