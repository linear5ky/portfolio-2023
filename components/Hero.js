import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";


export default function Hero() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (


<section class="fullheight flex">
        <div class="container">
 
                    <div class="hero">
                        <div class="content">   

                            <h1>Hi, I'm <span class="name">Marcus</span></h1>
                            <h2>I am a freelance full stack developer based in Staffordshire.</h2>
                            <p>I build custom website solutions using Wordpress, Magento, Laravel and Shopify.</p>

                        </div>

                        <div class="hero-image  circle">
            

                                    <Image
                                        src="/images/me.png"
                                        alt="Next.js Logo"
                                        width={200}
                                        height={200}
                                        priority
                                      />

                        </div>
                    </div>
        </div>
</section>

    );
}
 