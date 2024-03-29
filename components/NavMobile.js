import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import {motion} from 'framer-motion';
import { container, item } from "./Animation";
import {IconContext} from "react-icons"
import { RiMenu2Line } from "react-icons/ri"; 
import {RiGithubFill} from "react-icons/ri";
import {RiLinkedinBoxFill} from "react-icons/ri";
import navItems from "../constants/NavItems";

import contactItems from "../constants/ContactItems";

export default function NavMobile() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isActive, setActive] = useState("false");
  let iconStyles = { color: "white", fontSize: "1.5em" }

  useEffect(() => {
    setMounted(true);
  }, []);

 
 
  const handleClick = (e) => {    
    console.log('this is:' + e); 
    e.preventDefault();
    setActive(!isActive);
 };
 
  return (
 
  <div initial={{ opacity: 0 }}
    animate={{ opacity: 1}} 
    transition={{duration:1, ease: "easeOut"}}>

        <div class="topbar-wrapper">

            <div class="container flex between desktop-down">

            
               <a href="" class="mobile-menu" onClick={handleClick}>
                    <RiMenu2Line size={45}  color={"#fff"}  />
                </a>

                <div class="flex group">
                   <a href={"tel:" + contactItems.telephone}>{contactItems.telephone}</a>
                   <a href={contactItems.github} target="_blank" rel="noreferrer"><RiGithubFill size={30}  color={'#fff'} /></a>
                   <a href={contactItems.linkedin}  target="_blank" rel="noreferrer"><RiLinkedinBoxFill size={30}  color={'#fff'} /></a>
                 </div>
               
                  <nav 
                  //  initial={{ x: '-100px' }}
                    //animate={{ x: '0px'}} 
                    transition={{duration:1, ease: "easeOut"}}
                    className={isActive ? "" : "show"}>
                    <ul>
                              {navItems.items.map((proj, idx) => (
                                  <li key={proj.name}><Link  href={"#" + proj.href} smooth spy to={proj.href}>{proj.name}</Link></li>
                              ))}
                                 
                    </ul>
                </nav>
           


            </div>
        </div>
    </div>
    );
    
}
 