import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

import "../styles/nav.css";
import "../styles/hero.css";
import "../styles/projects.css";
import "../styles/services.css";
import "../styles/tech.css";
import "../styles/reviews.css";
import "../styles/footer.css";
import "../styles/contact.css";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Tech from "../components/Tech";
import Reviews from "../components/Reviews";

import Breakpoints from "../components/Breakpoints";

import { useMediaQuery, useTheme } from "@mui/material";
//import { useMediaQuery } from 'react-responsive';

import { useEffect, useState } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs")); // between 0 and 600px
  const isTablet = useMediaQuery(theme.breakpoints.only("sm")); // between 600px and 900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // above 900px

  return (
    <>
      <Head>
        <title>Freelance full stack developer - Staffordshire.</title>
        <meta
          name="description"
          content="Freelance full stack developer - Staffordshire. Laravel, Magento, Wordpress, React, Shopify"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </Head>

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-SPENCZHYC4"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
          gtag('config', 'G-SPENCZHYC4', {
            page_path: window.location.pathname,
          });
          `,
        }}
      />

      {isDesktop && <Nav>Soz Chest</Nav>}
      {isTablet && <NavMobile>Soz Chest</NavMobile>}
      {isMobile && <NavMobile>Soz Chest</NavMobile>}

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
