import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [headerClass, setHeaderClass] = useState('');
  const menuToggle = () => { headerClass === 'open' ? setHeaderClass('') : setHeaderClass('open'); }

  return (
    <header className={ headerClass }>
      <div className="nav__hamburger" onClick={ menuToggle }>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <ul className="navbar">
        <li className="logo"><Link to="/">Logo</Link></li>

        <div className='nav__menu'>
          <li><Link to="/" onClick={ menuToggle }>Home</Link></li>
          <li><Link to="/about" onClick={ menuToggle }>About</Link></li>
        </div>
      </ul>


    </header>
  )
};

export default Header;
