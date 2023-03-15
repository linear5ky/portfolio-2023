import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import {motion} from 'framer-motion';
import { container, item } from "./Animation";
import {IconContext} from "react-icons"
import { RiMenu2Line } from "react-icons/ri"; 
import navItems from "../constants/NavItems";
import contactItems from "../constants/ContactItems";


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
             
           

                    <div class="topbar-left"> <motion.a href={"tel:" + contactItems.telephone}>{contactItems.telephone}</motion.a></div>
                    <nav class="topbar-right">
                          <ul>
						  
                              {navItems.items.map((proj, idx) => (
                                  <motion.li variants={item}><Link href={"#" + proj.href} smooth spy to={proj.href}>{proj.name}</Link></motion.li>
       
                                ))}

                                
                        
                          </ul>
                      </nav>
                  
              </motion.div>
            </div>
        </div>
    </motion.div>
    );
    
}
 