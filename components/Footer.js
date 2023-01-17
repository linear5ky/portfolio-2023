import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";


export default function Footer() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
  <footer>
      <div class="container">
       
      </div>
    </footer>
    );
}
 