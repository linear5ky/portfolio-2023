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
    <div className="max-w-6xl select-none  mx-auto px-4 py-10 md:py-20">
        <div>
            Navbar111
      </div>
    </div>
  );
}
 