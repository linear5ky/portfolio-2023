import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";


export default function Services() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (

 
    <div class="container" id="services">

       <h3>Services</h3>  

      <section class="services">

          <article class="service">
            <h3>Custom Web Development</h3>
            <p>Do you have an idea for the next big thing? I can help bring this  idea into reality </p> 
            
            <p>From custom web apps, plugins to minimal viable projects. I can help to rapidly build this idea into reality into a working minimum viable product.</p>

            <button>  </button>

          </article>


          <article class="service">
            <h3>Agency Support</h3>
            <p>I can be an extension to your agency with professional support around the clock.</p>
            <p>Maybe a staff member is out sick, or the workload is too great, I can help to provide your business with the help that it needs</p>

          </article>

          <article class="service">
            <h3>Magento 1 - Magento 2 Migration</h3>
            <p>I can help your business make a seamless transitition from Mage 1 to Mage 2.</p>
          </article>
         

      </section>
    
      
  </div>
);
}
