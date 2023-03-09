import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import {motion} from 'framer-motion';
import { container, item } from "./Animation";
import {IconContext} from "react-icons"
import { RiMenu2Line } from "react-icons/ri"; 

export default function Nav() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
 
  <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1}} 
    transition={{duration:1, ease: "easeOut"}}>

        <div class="topbar-wrapper">


            <div class="container">

           
      

              <motion.div class="topbar" variants={container} initial="hidden" animate="show">
             
           

                    <div class="topbar-left"><motion.a href="tel:07875122876">07875122876</motion.a></div>
                    <nav class="topbar-right">
                          <ul>
                            <motion.li variants={item}><a href="">Home</a></motion.li>
                            <motion.li variants={item}><a href="">About</a></motion.li>
                            <motion.li variants={item}><a href="">Latest Work </a></motion.li>
                            <motion.li variants={item}><a href="">Services</a></motion.li>
                            <motion.li variants={item}><a href="">Contact</a></motion.li>
                          </ul>
                      </nav>
                  
              </motion.div>
            </div>
        </div>
    </motion.div>
    );
    
}
 