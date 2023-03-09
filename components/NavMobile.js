import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import {motion} from 'framer-motion';
import { container, item } from "./Animation";
import {IconContext} from "react-icons"
import { RiMenu2Line } from "react-icons/ri"; 


export default function NavMobile() {
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

           
            <a href="" class="mobile-menu">
                  <RiMenu2Line />
              </a>
        


            </div>
        </div>
    </motion.div>
    );
    
}
 