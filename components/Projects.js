import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { container, item, rtl, ltr, fade} from "./Animation";
import projects from "../constants/Projects";
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
   
            {projects.items.map((proj, idx) => (
                        <article class="project">

                                <div class="project-content">
                                        <div class="inner">
                                            <h4>{proj.name}</h4>
                                            {proj.description}
                                            <a href={proj.href} class="btn large" rel="nofollow" target="_blank" >View Website</a>
                                    </div> 
                                </div>

                                <div class="project-image">
                                        <Image
                                            src={proj.image}
                                            alt={proj.title}
                                            layout="fill"
                                            className="custom-img"
                                        />
                                 </div>            
                         </article>
       
))}
                
            </motion.section>
    
      </div>
    );
}
 