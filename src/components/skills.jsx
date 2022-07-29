import React from 'react'
import { images } from '../data/images'
import styles from '../styles/skills.css'

const Skills = () => {
  return (
    <div id='skills'>
        <div className="page-title">
        <h1 className='title'>
            {`< SKILLS/TOOLS >`}
        </h1>
        <h3 className="page-desc">
            Here is a list of tools i use in achieving great results while building.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatum debitis obcaecati minus delectus in sed quae 
            praesentium amet fugiat suscipit, ipsum totam quos? 

        </h3>
        </div>
 
        <section className="skills">
            <div className="skill">
                <div className="image">
                    <img src={images.react} alt="" />
                </div>
                <h3 className="skill-name">
                    React Js & Native
                </h3>
            </div>
            <div className="skill">
                <div className="image">
                    <img src={images.css} alt="" />
                </div>
                <h3 className="skill-name">
                    Tailwind CSS
                </h3>
            </div>
            <div className="skill">
                <div className="image">
                    <img src={images.figma} alt="" />
                </div>
                <h3 className="skill-name">
                    Figma
                </h3>
            </div>
            <div className="skill">
                <div className="image">
                    <img src={images.node} alt="" />
                </div>
                <h3 className="skill-name">
                    Node JS
                </h3>
            </div>
            <div className="skill">
                <div className="image" style={{padding:'.4rem 0',width:'50%'}} >
                    <img src={images.express} alt="" />
                </div>
                <h3 className="skill-name">
                    Express JS
                </h3>
            </div>
            <div className="skill">
                <div className="image">
                    <img src={images.mongo} alt="" />
                </div>
                <h3 className="skill-name">
                    MongoDB
                </h3>
            </div>

        </section>
    </div>
  )
}

export default Skills