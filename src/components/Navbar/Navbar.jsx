import React,{useState} from 'react'
import getImageUrl  from '../../utils'
import style from './Navbar.module.css'
const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  return (

    <nav className={style.navbar}>
      <div><a href="/" className={style.title}>portfolio</a></div>
      <div className={style.menu}>
        <img className={style.menuButton} src={!menuOpen ?getImageUrl('nav/menuIcon.png'):""} onClick={()=>{setMenuOpen(!menuOpen)}}/>
       
        <ul className={`${style.menuItems} ${menuOpen && style.menuOpen}`} id="menuItem" onClick={()=>{setMenuOpen(false)}}>
          {menuOpen && <li style={{alignSelf:"flex-end"}}><img src={getImageUrl('nav/closeIcon.png')}/></li>}
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#project">Project</a></li>
             <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
