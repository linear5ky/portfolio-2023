import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import techItems from "../constants/TechItems";

export default function Contact() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (

 
    <div class="container">

       <h3>Technologies I work with</h3>  

      <section class="techstack">

            {techItems.map((proj, idx) => (             
                  <div class="item">{proj}</div>
            ))}         
      </section>
    
      
  </div>
);
}
