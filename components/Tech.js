import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";


export default function Tech() {
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

            <div class="item">PHP</div>
            <div class="item">CSS</div>
            <div class="item">Javascript</div>
            <div class="item">Mysql</div>
            <div class="item">SASS</div>
            <div class="item">LESS</div>
            <div class="item">Gulp</div>

            <div class="item">Webpack</div>
            <div class="item">Tailwind</div>
            <div class="item">PHP</div>
            <div class="item">Nextjs</div>
            <div class="item">Wordpress</div>
            <div class="item">Magento</div>
            <div class="item">Shopify</div>
            <div class="item">Laravel</div>

            <div class="item">Docker</div>
           
      </section>
    
      
  </div>
);
}
