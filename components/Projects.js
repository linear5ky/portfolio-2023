import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { container, item, rtl, ltr, fade } from "./Animation";
import projects from "../constants/Projects";
export default function Projects() {
  const router = useRouter();
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
    setMounted(true);
  }, [control, inView]);

  return (
    <div class="container" id="projects">
      <h2>Recent Projects</h2>

      <motion.section class="projects">
        {projects.items.map((proj, idx) => (
          <motion.article
            key={proj.name}
            class="project"
            initial={{ opacity: 0, transistion: { duration: 1.5 } }}
            whileInView={{ opacity: 1, transistion: { duration: 1.5 } }}
            animate={control}
          >
            <div class="project-content">
              <div class="inner">
                <h3>{proj.name}</h3>
                <p>{proj.description}</p>

                <a
                  href={proj.href}
                  class="btn large"
                  rel="noreferrer"
                  target="_blank"
                >
                  View Website
                </a>
              </div>
            </div>

            <div class="project-image">
              <Image
                src={proj.image}
                alt={proj.title}
                layout="fill"
                className="custom-img"
              />
            </div>
          </motion.article>
        ))}
      </motion.section>
    </div>
  );
}
