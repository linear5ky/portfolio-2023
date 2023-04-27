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
       
            >
   
            {projects.items.map((proj, idx) => (
                     
                    <motion.article  class="project"       
                         initial={{ opacity: 0, transistion: { duration: 1.5}}}
                         whileInView={{ opacity: 1, transistion: { duration: 1.5} }}
                          animate={control}
                        >
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
                         </motion.article>
       
))}
                
            </motion.section>
    
      </div>
    );
}
 