import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";


export default function Reviews() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (

 
    <div class="container">



      <section class="reviews">

            <div class="review primary glow">
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra iaculis ipsum vel mattis. Vivamus pellentesque lacus a faucibus finibus. Vestibulum et ipsum quam. Suspendisse faucibus posuere varius. Phasellus molestie dui lorem, sed ornare ipsum malesuada ut. Donec ex purus, tristique vehicula aliquam ut, aliquam eu tellus. Nam luctus odio id neque gravida, vitae lacinia justo pulvinar. Nulla facilisi. Pellentesque enim ex, ultrices convallis magna sit amet, facilisis eleifend nulla. </p>
                <p class="author">- Author</p>
              </div>

              <div class="hero-image  circle-small">
            

            <Image
                src="/images/me.png"
                alt="Next.js Logo"
                width={100}
                height={100}
                priority
              />

            </div>
            </div>
            <div class="review secondary glow">
                <div class="content">
                <p class="author">  Lorem ipsum dolor sit amet, consectetur adi</p>
              </div></div>
            <div class="review tertiary glow">    <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                <p class="author">- Author</p>
              </div></div>
           
      </section>
    
      
  </div>
);
}
