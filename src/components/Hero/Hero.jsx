import React from 'react'
import getImageUrl from '../../utils'
import style from "./Hero.module.css"
const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Hi I am Iman</h1>
        <p className={style.description}>I am full stack developer with 1+ years of self project experience</p>
        <a href="" className={style.contactBtn}>contact me</a>
      </div>
      <img src={getImageUrl('hero/imanimage.jpeg')}  className={style.heroImage}/>
      <div className={style.topBlur}/>
      <div className={style.bottomBlur}/>
    </section>
  )
}

export default Hero
