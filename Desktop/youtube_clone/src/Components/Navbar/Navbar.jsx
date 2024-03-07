import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from "../../assets/more.png"
import notifications_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'


function Navbar({setMenu, menu}) {

  function handleToggleMenu () {
    setMenu(!menu)
  }
  
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img onClick={handleToggleMenu} className='menu-icon' src={menu_icon} alt="" />
           <Link to='/'><img className='logo' src={logo} alt="" /></Link>
        </div>

        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input type="text" placeholder='Search' />
            <img src={search_icon} alt="" />
          </div>
        </div>

        <div className="nav-right flex-div">
          <img src={upload_icon} alt="" />
          <img src={more_icon} alt="" />
          <img src={notifications_icon} alt="" />
          <img src={profile_icon} className='user-icon' alt="" />
        </div>
    </nav>
  )
}

export default Navbar