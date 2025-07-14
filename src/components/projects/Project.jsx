import React from 'react'
import projects from "../../data/projects.json"
import style from "./Project.module.css"
const Project = () => {
  return (
    <section id="project" className={style.container}>
      <h2 style={{textAlign:"center",marginBottom:"20px",}} className={style.title}>Project</h2>
       <div className={style.content}>
        {projects.map((project,id ) => {
           return <div key={id} className={style.project}>
            <img src={project.imagesrc} className={style.imagestyle}/>
            <h3 className={style.title}>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
                {
                    project.skills.map((skill,id)=>{
                        return <li key={id}>{skill}</li>
                    })
                }
            </ul>
            <button className={style.btn}><a href={project.source} style={{textDecoration:"none"}} >source</a></button>
           </div>
        })
    }
       </div>

    </section>
  )
}

export default Project
