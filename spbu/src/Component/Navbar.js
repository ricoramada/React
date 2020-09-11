import React, {useState} from 'react';
import  SidebarData  from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from "react-icons/gi";
import * as VscIcons from 'react-icons/vsc';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar,setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}> 
      <div className="navbar">
        <Link to="#section" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <ul className="navbar-atas">
          <li><Link to="/user" className="link">User <AiIcons.AiOutlineUser/></Link></li>
          <li><Link to="/login" className="link">Login <AiIcons.AiOutlineLogin/></Link></li>
        </ul>
      </div>  
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle' onClick={showSidebar}>
            <Link to="#section" className='menu-bars'>
              <VscIcons.VscClose/>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                    <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
          <label className="lock">Made In <GiIcons.GiAmericanShield/> Defender</label>
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
