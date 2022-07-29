import React from 'react'
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
                    <img src="src\assets\gif\animation_500_l626if05.gif" alt="" />
                </div>
                <h3 className="skill-name">
                    React Js & Native
                </h3>
            </div>
            <div className="skill">
                <div className="image">
                    <img src="src\assets\gif\animation_500_l629e4xq.gif" alt="" />
                </div>
                <h3 className="skill-name">
                    Tailwind CSS
                </h3>
            </div>
            <div className="skill">
                <div className="image">
                    <img src="src\assets\gif\animation_500_l62a40uy.gif" alt="" />
                </div>
                <h3 className="skill-name">
                    Figma
                </h3>
            </div>
            <div className="skill">
                <div className="image">
                    <img src="src\assets\gif\animation_500_l628xc62.gif" alt="" />
                </div>
                <h3 className="skill-name">
                    Node JS
                </h3>
            </div>
            <div className="skill">
                <div className="image" style={{padding:'.4rem 0',width:'50%'}} >
                    <img src="src\assets\gif\expressjs.png" alt="" />
                </div>
                <h3 className="skill-name">
                    Express JS
                </h3>
            </div>
            <div className="skill">
                <div className="image">
                    <img src="src\assets\gif\animation_500_l6287yit.gif" alt="" />
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