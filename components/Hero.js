import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section class="flex fullheight-mobile-up extraPaddingTopBottom" id="about">
      <div class="container">
        <div class="hero">
          <div class="content">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
         <h1>Freelance Web Developer</h1>
<h2>Hi, I&apos;m Marcus, a <span class="bold">freelance full stack web developer from Staffordshire</span></h2>      
   

              
        <p>I Build <span class="bold">Custom Websites</span> Using WordPress, Laravel, Shopify, and Next.js, tailored to meet the unique needs of your business.</p>
           
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div class="hero-image  circle">
              <Image
                src="/images/me3.png"
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
