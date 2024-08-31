import logo from '../../images/logo.svg'
import './Logo.css'

export default  function Logo () {
    return(
        <div className='logo'>
          <img src={logo} alt='logo'/>
          <p><strong>My</strong>Books</p>
        </div>
    )
}