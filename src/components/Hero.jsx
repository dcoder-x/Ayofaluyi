import React, { useEffect, useState } from 'react'
import styles from '../styles/hero.css'
import portrait from '../assets/portrait.png'
import { Icon } from '@iconify/react';
import Spline from '@splinetool/react-spline';
import { images } from '../data/images';


const Hero = () => {
        const [isSpline, setSpline] = useState(true)
    useEffect(() => {
        const skill = document.querySelectorAll('.skill')
        skill.forEach(item=>{
            item.addEventListener('click',()=>console.log('over'))
        })   
            
        const basicInfo = document.querySelector('.basic-info')
        
        basicInfo.addEventListener('mouseover',e=>{
            let name = document.querySelector('.name')
            let desc = document.querySelector('.desc')
            let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
            basicInfo.style.transform=`rotateX(-${yAxis}deg) rotateY(-${xAxis}deg)`
            desc.style.transform=`translateZ(40px)`
            name.style.transform=`translateZ(100px)`
            name.style.textShadow= `2px 2px 10px #35373866  `;
            desc.style.textShadow= `2px 2px 10px #35373866  `;

        })
        basicInfo.addEventListener('mouseleave',e=>{
            let name = document.querySelector('.name')
            let desc = document.querySelector('.desc')
            desc.style.transform=`translateZ(0px)`
            name.style.transform=`translateZ(0px)`
            name.style.textShadow= `none `;
            desc.style.textShadow= `none `;

            basicInfo.style.transform=`rotateX(0deg) rotateY(0deg)`
        })
       window.onload=()=>{
            const portrait = document.querySelector('.portrait-image'),
            home = document.querySelector('#home')
            const spline =document.querySelector('.spline')
            setTimeout(() => {
                
                    spline.style.height=`100vh`
                    spline.style.display=`block`
                    
                    spline.style.width=`100%`
                    console.log(spline)
               
                
            }, 1000);
            setTimeout(()=>{
                console.log(portrait.clientHeight,portrait.clientWidth)


                if (portrait.clientHeight <= 350) {
                    console.log('no spline')
                    console.log(portrait.clientHeight,portrait.clientWidth)
    
                    setSpline(false)
                    portrait.innerHTML=`<img src="src/assets/portraitanim.png" alt="" class='portrait-image  absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'/>`
            } else {
                    setSpline(true)
                    console.log(isSpline)
            }
            },5000)
          
       }
  
        
    },[])
    // function spline() {
    //         console.log('started')
    //         try {
    //             return(
    //                 <>
                    
    //                 </>
    //             )
    //         } catch (error) {
    //             console.log(error)
    //             return(
    //                 <p>
    //                     ffmrmuy,k,iiu{error}
    //                 </p>
    //             )
                    
                
    //         }
    //         if (!spline) {
    //             console.log('no network')
    //         }
    // }
    
  return (
    <div id='home'>
        <img src={images.world} alt="" className="bg-earth" />
        {/* <img src="src\assets\portraitanim.png" alt="" className="bg-modeling" /> */}
        <div className="home-sections hello">
            <div className="basic-info">
                <div className="name">
                    <h2>
                        Hello, I'm
                    </h2>
                    <h1>
                        AYOFALUYI
                    </h1>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deserunt quasi aperiam quod at beatae magnam possimus, 
                    doloribus dicta unde ducimus quos cupiditate 
                </div>
            </div>

        </div>
        <div className="contact">
                <a href="" className="contact-links">
                    <Icon icon="fluent:mail-16-filled"/>
                </a>
                <a href="" className="contact-links">
                    <Icon icon="jam:github"  />
                </a>
                <a href="" className="contact-links">
                <Icon icon="icon-park-solid:instagram"  />
                </a>

                <a href="" className="contact-links">
                <Icon icon="akar-icons:linkedin-box-fill"  />
                </a>
                <a href="" className="contact-links">
                <Icon icon="akar-icons:behance-fill"  />
                </a>
                
            </div>
        <div className="home-sections skills">
            <div className="skill">
                <div className="image">
                    <img src={images.appdev} alt="" />
                </div>
                <div className="skill-name">
                    Mobile development
                </div>
            </div>
            <div className="skill ">
                <div className="image shadow-mblack-lighter">
                    <img src={images.webdev} alt="" />
                </div>
                <div className="skill-name">
                    Web development
                </div>
            </div>
            <div className="skill">
                <div className="image">
                    <img src={images.web3d} alt="" />
                </div>
                <div className="skill-name">
                    Web 3D
                </div>
            </div>

        </div>
        <div className='portrait-image  absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            {/* <img src={portrait} alt="" className="portrait-image  absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2"/> */}
            
                <Spline className='spline' style={{height:"100%",width:'100%', display:"block"}}  scene="https://prod.spline.design/4JrvSFFzWjQ1YarT/scene.splinecode" />
                

        </div>
    </div>
  )
}

export default Hero