import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import 'normalize.css';
import '@picocss/pico'

import styles from '../styles/Home.module.css'
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services"; 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Freelance Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
      <Nav />
      <Hero />
      <Projects />
      <Services />
         
         {/* <main className={styles.main}>
            <div className={styles.description}>
              <p>sssssssss ssksks sksks sss</p>
            </div>
  </main> */}
       
    
    </>
  )
}
