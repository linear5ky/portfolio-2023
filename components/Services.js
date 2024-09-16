import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import services from "../constants/Services";

export default function Services() {
  const router = useRouter();
  // console.log(router.asPath);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div class="container" id="services">
      <h2>Services</h2>

      <section class="services">
        {services.items.map((proj, idx) => (
          <article key={proj.name} class="service">
            <h3>{proj.name}</h3>
            {proj.description}
          </article>
        ))}
      </section>
    </div>
  );
}
