import React from 'react'
import '../pages/Navbar.css'
import search_icon from '../assets/search.png'
import home_icon from '../assets/home.png'
import followers_icon from '../assets/followers.png'
import communities_icon from '../assets/communities.png'
import notification_icon from '../assets/notifications.png'

const NavBar = () => {
  return (
    <div className='navbar'>
      <p className='logo'>Blog Platform</p>
      <ul>
        <li><img alt='home-icon' src={home_icon} /></li>
        <li><img alt='followers-icon' src={followers_icon} /></li>
        <li><img alt='communities-icon' src={communities_icon} /></li>
        <li><img alt='notification-icon' src={notification_icon} /></li>
        
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Search blogs'/> 
         <img src={search_icon} alt='search-icon-img'/>
      </div>
      <img src='' alt=''  className='toggle-icon'/> 
    </div>
  )
}

export default NavBar
