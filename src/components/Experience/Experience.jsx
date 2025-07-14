import React from 'react'
import skills from "../../data/skills.json"
import style from "./Experience.module.css"
import history from "../../data/history.json"
import getImageUrl from "../../utils"
const Experience = () => {
  return (
    <section className={style.container} id="experience">
       <h2 className={style.title}>Experience</h2>
       <div className={style.content}>
        <div className={style.skills}>
          {
             skills.map((skill,id)=>{
              return <div key={id} >
                  <div className={style.skillImageContainer}><img src={skill.imageSrc} alt={skill.title}/></div>
                  {console.log(skills)}
                  <p>{skill.title}</p>
                </div>
             })
          }
        </div>
        <ul className={style.history}>
          {
            history.map((historyItem,id)=>{
              return <li key={id} className={style.historyItem}>
                  <img src={getImageUrl(historyItem.imageSrc)} style={{height:"100px",width:"100px"}}/>
                  <div className={style.historyItemDetails}>
                    <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                    <ul>
                      {
                        historyItem.experiences.map((experience,id)=>{
                          return <li key={id}>{experience}</li>
                        })
                      }
                    </ul>
                  </div>
              </li>
            })
          }
        </ul>
       </div>
    </section>
  )
}

export default Experience
