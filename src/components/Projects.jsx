import React, { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import styles from '../styles/projects.css'

const Projects = () => {
    const [slideNum, setSlideNum] = useState(0)
    useEffect(()=>{
        const leftbtn = document.querySelector(".leftbtn")
        const rightbtn = document.querySelector(".rightbtn")
        if (slideNum<1) {
            leftbtn.disabled
        }

    })
  return (
    <div id='projects'>
        <div className="info">
            <h1 className="title">
                SELECTED WORKS
            </h1>
            <h1 className="name">
                {projects[slideNum].name}
            </h1>
            <h4 className="role">
                Role: {projects[slideNum].role}
            </h4>
            <h3 className="type">
                Product: {projects[slideNum].type}
            </h3>
            <a href={`${projects[slideNum].link}`}>
                <button>
                    View &rarr;
                </button>
            </a>
        </div>
        <div className="image" style={{ background:`url(${projects[slideNum].background})` }}>
            <img src={`${projects[slideNum].banner}`} alt="" />
        </div>
        <div className="buttons">
            <div className="leftbtn" onClick={()=>{slideNum > 0?setSlideNum(slideNum-1):setSlideNum(projects.length-1);}}>
                {`<`}
            </div>
            <div className="rightbtn" onClick={()=>{slideNum != projects.length-1?setSlideNum(slideNum+1):setSlideNum(0);}}>
                {`>`}
            </div>
        </div>
    </div>
  )
}

export default Projects