import PhoneIcon from '@mui/icons-material/Phone'

import logo from '../../assets/logo-rimac.svg'
import './Header.scss'


const Header = () => {
  return (
    <header>
        <div className='header-container'>
          <img className='logo' src={logo} alt='logo' />
          <div className='contact'>
            <p className='sales'>
              <span className='sales-text'>¡Compra por este medio!</span>
              <div className='sales-phone'><PhoneIcon /><strong>(01) 411 6001</strong></div>
            </p>
          </div>
        </div>
    </header>
  )
}

export default Header