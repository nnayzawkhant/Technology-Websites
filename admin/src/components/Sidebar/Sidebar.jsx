
import React, { useContext, useEffect, useRef, useState } from 'react';
import './Sidebar.css';
import { Link, NavLink } from 'react-router-dom';
import Router from '../../routers/Router';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ImageIcon from '@mui/icons-material/Image';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <main className={show ? 'space-toggle' : null}>
       <div className='top_nav'>
          <div className='top_nav_wrapper'>
              <div className='search_box'>
                  <input type="text" placeholder='Search....'/>
                  <SearchIcon className='search_box_icon'/>
              </div>
              <div className={show ? 'top_nav_right' : 'top_nav_right_right'}>
                  <span className='top_notification'>
                      <ChatBubbleIcon className='notification'/>
                      <span className='badge'>1</span>
                  </span>

                  <DarkModeIcon/>

                  <div className='nav_profile'>
                      <Link to="/settings"><img src="https://cdn.pixabay.com/photo/2017/06/10/22/58/composing-2391033__480.jpg" alt=""/></Link>
                  </div>
              </div>
          </div>
      </div>
      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'> 
          <div>
            <div className='toggle' onClick={() => setShow(!show)}>
              {show ? <div className='public'><h1>Technology</h1></div> : <MenuIcon/>}
            </div>  
            <div className='nav-list'>
              <NavLink to='/dashboard' className={cl => cl.isActive ? 'nav-link nav__active' : 'nav-link' }>
                  <DashboardIcon/>
                  <span className='nav-link-name'>Dashboard</span>
              </NavLink>

              <NavLink to='/posts' className={cl => cl.isActive ? 'nav-link nav__active' : 'nav-link' }>
                  <ImageIcon/>
                  <span className='nav-link-name'>Posts</span>
              </NavLink>

              <NavLink to='/categories' className={cl => cl.isActive ? 'nav-link nav__active' : 'nav-link' }>
                  <CategoryIcon/>
                  <span className='nav-link-name'>Categories</span>
              </NavLink>
              

              <NavLink to='/users' className={cl => cl.isActive ? 'nav-link nav__active' : 'nav-link' }>
                  <PeopleIcon/>
                  <span className='nav-link-name'>Users</span>
              </NavLink>

              <NavLink to='/comments' className={cl => cl.isActive ? 'nav-link nav__active' : 'nav-link' }>
                  <ModeCommentOutlinedIcon/>
                  <span className='nav-link-name'>Comments</span>
              </NavLink>
              
              <div>
                

                <div className='menu-container' ref={menuRef}>
                <NavLink to='/settings' className={cl => cl.isActive ? 'nav-link nav__active' : 'nav-link' } onClick={() => setOpen(!open)}>
                  <SettingsIcon/>
                  <span className='nav-link-name'>Settings</span>
                </NavLink>

                  <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                    <ul className='main__ul'>
                      <NavLink to='/settings/mydetails' className='ul__nav'>My Details</NavLink>
                      <NavLink to='/settings/profile' className='ul__nav'>Profile</NavLink>
                      <NavLink to='/settings/notification' className='ul__nav'>Notification</NavLink>
                    </ul>
                  </div>
                </div>
              </div>

              <NavLink to='/error' className={cl => cl.isActive ? 'nav-link nav__active' : 'nav-link' }>
                <ErrorOutlineIcon/>
                <span className='nav-link-name'>Error 404</span>
              </NavLink>

            
            </div>
          </div>
          <NavLink to='/logout' className={cl => cl.isActive ? 'nav-link nav__active' : 'nav-link' }>
            <LogoutIcon/>
            <span className='nav-link-name'>Logout</span>
          </NavLink>
        </nav>
      </aside>

      <Router/>
    </main>
  );
};

export default Sidebar;


// import React from 'react';
// import sidebarDatas from '../../sidebarDatas';

// const Sidebar = () => {
//   return (
//     <div>
//       <ul className="nav__list">
//             {sidebarDatas.map((item, index) => (
//               <li className="nav__item" key={index}>
//                 <NavLink
//                   to={item.path}>
//                   <i className={item.icon}></i>

//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//     </div>
//   )
// }

// export default Sidebar