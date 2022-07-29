import React, { useEffect, useRef } from 'react'
import { navlinks } from '../data/navlinks'
import '../index.css'



const Nav = () => {
    const nav = useRef()
    useEffect(()=>{
        const navLinks = document.querySelector('.nav-links')
        const nav = document.querySelector('.nav'),
        menubtn = document.querySelector('.menubtn'),
        menudiv= document.querySelectorAll('.menubtn div')

        menubtn.onclick=()=>{
            menudiv.forEach((div)=>{
                div.classList.toggle('close')
            })
            navLinks.classList.toggle('open')
            console.log(nav)
        }
        
        window.onscroll=e=>{
            const scrollY= document.documentElement.scrollTop||document.scrollTop
            if (scrollY>100) {
                // navLinks.classList.add('nav-links-scroll')
                // console.log(navLinks)
                nav.style.backgroundColor='#F1F4F6'
            } else {
                // navLinks.classList.remove('nav-links-scroll')
                nav.style.backgroundColor='transparent'
            }
        }

    },[])
  return (
    <div ref={nav} className={`nav transition pb-4 z-10 flex align-middle justify-between w-full fixed top-0 left-0 pt-7`}>
        <div className="logo ml-20 flex text-xl font-black" >
            Ayofaluyi <p className=' h-2 w-2 bg-mblue rounded-full mt-4 ml-1  text-mblue align-bottom'></p>
        </div>
        <div className="nav-links flex align-middle justify-evenly">
            {
                navlinks.map((links)=>{
                    return(
                        <>
                            <div className="links" key={links.name}>
                            <a href={`${links.link}`}className="links">
                                {links.name}
                            </a>
                            <div className="link-line">

                            </div>
                            </div>
                        </>
                    )
                })
            }
 
            
        </div>
        <a href="#contact">
            <button className="contact-button mr-20  p-3 bg-mblue w-28 rounded-md text-white shadow-md shadow-mbluelight">
                Lets Talk
            </button>
        </a>
        <div className="menubtn">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Nav