import logo from '../../assets/logo-rimac-white.svg';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <img src={logo} />
        <hr/>
        <div className='copyright'>
          <p>&copy; 2023 RIMAC Seguros y Reaseguros.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer