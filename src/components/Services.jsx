import React, { useEffect } from 'react'
// import { Spline } from 'react-spline'
import styles from '../styles/services.css'
import Spline from '@splinetool/react-spline';

const Services = () => {

  return (
    <div id='services'>
    {/* <Spline className='spline' scene="https://prod.spline.design/G-NzuZeJKzIODEx9/scene.splinecode" /> */}
    <div className="title">
      SERVICES
    </div>
    <div className="content">
      <div className="service">
        <img src="src\assets\background minatures\presentation.png" alt="" />
        <h1 className="service-name">
          Web development
        </h1>
        <h4 className="service-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odio 
          distinctio error. Similique, dolorem quam cumque veritatis repellendus.
        </h4>
      </div>
      <div className="service">
        <img src="src\assets\background minatures\app-development.png" alt="" />
        <h1 className="service-name">
          Mobile development
        </h1>
        <h4 className="service-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odio 
          distinctio error. Similique, dolorem quam cumque veritatis repellendus.
        </h4>
      </div>
      {/* <div className="service">
        <img src="src\assets\background minatures\modeling.png" alt="" />
        <h1 className="service-name">
          Web3 Js
        </h1>
        <h4 className="service-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odio 
          distinctio error. Similique, dolorem quam cumque veritatis repellendus.
        </h4>
      </div> */}
      <div className="service">
        <img src="src\assets\background minatures\backend.png" alt="" />
        <h1 className="service-name">
          Backend development
        </h1>
        <h4 className="service-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe odio 
          distinctio error. Similique, dolorem quam cumque veritatis repellendus.
        </h4>
      </div>
    </div>
    </div>
  )
}

export default Services