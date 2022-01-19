import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Navbar = () => {
  //destructing and getting the neccesery method and more
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();
  const displaySubmenu = (e) => {
    //grab the text and link/location
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);
    //getting center of btn
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3


    openSubmenu(page, {center, bottom});
  }

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn'))
    closeSubmenu();
  }
  //creating nav 
  return <nav className='nav' onMouseOver={handleSubmenu}>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="stripe"  className='nav-logo'/>
        {/* button for open or sidebar */}
        <button className="btn toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
       
        <li>
          {/* buttons need to match the data, products == products */}
          <button className="link-btn" onMouseOver={displaySubmenu}>
            products
          </button>
        </li>
        <li>
          {/* buttons need to match the data, products == products */}
          <button className="link-btn" onMouseOver={displaySubmenu}>
            develeopers
          </button>
        </li>
        <li>
          {/* buttons need to match the data, products == products */}
          <button className="link-btn" onMouseOver={displaySubmenu}>
            company
          </button>
        </li>
      </ul>
      <button className="btn singin-btn">Sign in</button>
    </div>
    </nav>
}

export default Navbar
