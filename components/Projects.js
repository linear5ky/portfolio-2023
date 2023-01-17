import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";


export default function Projects() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (

      <div class="container">

        <h3>Projects</h3>  
        
            <section class="projects">

                    <article class="project">

                      <div class="project-content">
                             <div class="inner">
                                    <h4>TCL Cloud</h4>
                                    <p>Custom web app written in Laravel</p>
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



                    <article class="project">

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


                    <article class="project">

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
                
            </section>
    
      </div>
    );
}
 