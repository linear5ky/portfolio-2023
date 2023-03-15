
import Image from 'next/image'
import { Inter } from '@next/font/google'
import 'normalize.css';
import '@picocss/pico'

import styles from '../styles/Home.module.css'

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services"; 
import Tech from "../components/Tech"; 
import Reviews from "../components/Reviews"; 
import Contact from "../components/Contact"; 
import Breakpoints from "../components/Breakpoints"; 






export default function Home() {


  return (
    <>
    
  
      <Hero  />
      <Projects />
      <Services />
      <Tech />
      <Reviews />
      <Contact />  
   

         {/* <main className={styles.main}>
            <div className={styles.description}>
              <p>sssssssss ssksks sksks sss</p>
            </div>
  </main> */}
       
    
    </>
  )
}
