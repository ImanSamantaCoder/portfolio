import React from 'react'
import getImageUrl from '../../utils'
import style from './About.module.css'
const About = () => {
  return (
    <section className={style.container} id="about">
      <h2 className={style.title}>About</h2>
      <div className={style.content}>
        <img src={getImageUrl('about/me_sitting.jpg')} alt="me sitting with a laptop" className={style.aboutImage}/>
        <ul className={style.aboutitems}>
          <li className={style.aboutitem}> 
            <img src={getImageUrl("about/cursorIcon.png")} alt="about"/>
            <div className={style.aboutitemtext}>
              <h3>Frontend Developer</h3>
              <p>I am responsible for building responsibe and optimized website</p>
            </div>
          </li>
          <li className={style.aboutitem}> 
            <img src={getImageUrl("about/serverIcon.png")} alt="about"/>
            <div className={style.aboutitemtext}>
              <h3>Backened Developer</h3>
              <p>I am responsible for building fast and optimized backened system</p>
            </div>
          </li>
          <li className={style.aboutitem}> 
            <img src={getImageUrl("about/uiIcon.png")} alt="about"/>
            <div className={style.aboutitemtext}>
              <h3>Ui/Ux designer</h3>
              <p>I can provide Nice ui to client</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
