import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import {motion} from 'framer-motion';
import { container, item } from "./Animation";
import {IconContext} from "react-icons"
import { RiMenu2Line } from "react-icons/ri"; 
import navItems from "../constants/NavItems";
import contactItems from "../constants/ContactItems";

export default function NavMobile() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


 
  const handleClick = (e) => {    
    console.log('this is:' + e); 
    e.preventDefault();
 };
 
  return (
 
  <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1}} 
    transition={{duration:1, ease: "easeOut"}}>

        <div class="topbar-wrapper">

            <div class="container flex between desktop-down">

            
               <a href="" class="mobile-menu" onClick={handleClick}>
                    <RiMenu2Line size={35}/>
                </a>

                <motion.a href={"tel:" + contactItems.telephone}>{contactItems.telephone}</motion.a>
               
               
                  <nav>
                    <ul class="hide">
                              {navItems.map((proj, idx) => (
                                  <motion.li variants={item}><a href="">{proj}</a></motion.li>
                              ))}
                    </ul>
                </nav>
           


            </div>
        </div>
    </motion.div>
    );
    
}
 