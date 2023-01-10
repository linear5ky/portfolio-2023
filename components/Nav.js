import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";


export default function Nav() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
  <div class="topbar-wrapper">
      <div class="container">
        <div class="topbar">
          
              <div class="topbar-left"><a href="tel:07875122876">07875122876</a></div>
              <nav class="topbar-right">
                    <ul>
                      <li><a href="">Home</a></li>
                      <li><a href="">About</a></li>
                      <li><a href="">Latest Work </a></li>
                      <li> <a href="">Services</a></li>
                      <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            
        </div>
      </div>
  </div>
    );
}
 