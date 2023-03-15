import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { container, item, rtl, ltr, fade} from "./Animation";

export default function Projects() {
  const router = useRouter();
  const control = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);
  

  useEffect(() => {
    if (inView) {
        control.start("visible");
    } else {
       control.start("hidden"); 
    } 
    setMounted(true);
  }, [control, inView]);



  return (

      <div class="container" id="projects">

        <h3>Recent Projects</h3>  

            <motion.section class="projects"
             variants={fade}
             initial="hidden"
             animate={control}
             ref={ref}

            >

                    <article class="project"
                  
                    >

                      <div class="project-content">
                             <div class="inner">
                                    <h4>TCL Cloud</h4>
                                    <p>Custom web application writte in in Laravel.</p>
                            </div>
                        </div>


                         <div class="project-image">

                            
                            <Image
                                src="/images/portfolio-tcl.jpg"
                                alt="Next.js Logo"
                                layout="fill"
                                className="custom-img"

                                />

                        </div>

                     
                    </article>



                    <article class="project"
                        variants={fade}
                        initial="hidden"
                        animate={control}
                        ref={ref}
                    >

                        <div class="project-content">
                            <div class="inner">
                                    <h4>TCL Cloud</h4>
                                    <p>Custom website written in Wordpress. 
                            
                                    </p>
                            </div>
                        </div>


                        <div class="project-image">

                            
                            <Image
                                src="/images/portfolio-follwells.jpg"
                                alt="Next.js Logo"
                                layout="fill"
                                className="custom-img"

                                />

                        </div>
                    </article>


                    <article class="project"
                        variants={fade}
                        initial="hidden"
                        animate={control}
                        ref={ref}
                    >

                        <div class="project-content">
                            <div class="inner">
                                    <h4>TCL Cloud</h4>
                                    <p>Custom web app written in Laravel</p>
                            </div>
                        </div>


                        <div class="project-image">

                            
                            <Image
                                src="/images/portfolio-follwells.jpg"
                                alt="Next.js Logo"
                                layout="fill"
                                className="custom-img"

                                />

                        </div>
                    </article>


                
            </motion.section>
    
      </div>
    );
}
 