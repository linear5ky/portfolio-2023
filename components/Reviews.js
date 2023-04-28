import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import ReviewItems from "../constants/Reviews";

export default function Reviews() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (

 
    <div class="container">
      
      <h3>Reviews</h3>

      <section class="reviews">

        {ReviewItems.items.map((proj, idx) => (
            <div key={proj.class} class={"review  glow " + proj.class}>
              <div class="content">
                {proj.review}
                <p class="author">{proj.author}  <span>{proj.company}</span></p>
              </div>
            </div>

        ))}

      </section>
    
      
  </div>
);
}
