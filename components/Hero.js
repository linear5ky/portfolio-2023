import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import {motion} from 'framer-motion';


export default function Hero() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (

    
    <section class="flex fullheight-mobile-up extraPaddingTopBottom"  >
            <div class="container">
    
                        <div class="hero">
                            <div class="content"> 

                              <motion.div initial={{ opacity: 0 }}   
                                          animate={{ opacity: 1}} 
                                          transition={{duration:1, ease: "easeOut"}}
                                          
                                          >
                                  <h1>Hi, I'm <span class="name">Marcus</span></h1>
                                  <h2>I am a <span class="bold">freelance full stack developer</span> based in Staffordshire.</h2>
                                  <p>I build <span class="bold">custom website solutions</span> using Wordpress, Magento, Laravel and Shopify.</p>
                              </motion.div>


                            </div>


                             <motion.div 
                                  initial={{  opacity: 0 }}
                                  animate={{ x: 0, opacity:1 }}
                                  transition={{duration:0.5}}>
                                  <div class="hero-image  circle">
                      
                                              <Image
                                                  src="/images/me.png"
                                                  alt="Next.js Logo"
                                                  width={200}
                                                  height={200}
                                                  priority
                                                />
                              
                                  </div>
                                  </motion.div>
                        </div>
                   
            </div>
    </section>
  

    );
}
 