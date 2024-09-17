import { Fragment } from "react";
const projects = {
  items: [
    {
      name: (
        <>
          Elitesie: <span>Custom Laravel</span>
        </>
      ),
      description: (
        <Fragment>
          <p>
            A custom web application built in Laravel and Vue. This site helps
            to digitise health and safety reports that are undertaken by
            hundreds of schools across the Midlands area.
          </p>{" "}
          <p>
            Functionality includes digital signatures, customised data tables
            and a full admin interface that manages everything.
          </p>
        </Fragment>
      ),
      image: "/images/portfolio-elite.jpg",
      href: "https://caretakersapp.elitesie.uk/",
    },

    {
      name: (
        <>
          Tanker.cloud: <span>Custom Laravel</span>
        </>
      ),
      description: (
        <Fragment>
          <p>
            This custom web application, built with Laravel and Vue, streamlines
            the entire process of hiring out a fleet of vehicles.
          </p>{" "}
          <p>
            {" "}
            Features include: digital signatures, contracts, video recordering
            and is all fully managed via the backend admin that is styled via
            Tailwind
          </p>
        </Fragment>
      ),
      image: "/images/portfolio-tcl.jpg",
      href: "https://tanker.cloud",
    },

    {
      name: (
        <>
          Featurewall.co.uk: <span>Custom Wordpress</span>
        </>
      ),
      description: (
        <Fragment>
          <p>
            This API-based, custom Wordpress website enables users to choose
            from thousands of images to create personalized wallpaper murals.{" "}
          </p>
          <p>
            {" "}
            Features include: custom Cropper, bespoke Calendar, multiple APIs
            for image selection and to facilitate the order for the installation
            team.
          </p>
        </Fragment>
      ),
      image: "/images/portfolio-imdecor2.png",
      href: "https://featurewall.co.uk/",
    },

    {
      name: (
        <>
          Ronbrooks.co.uk: <span>Custom Wordpress</span>
        </>
      ),
      description: (
        <Fragment>
          <p>A custom WordPress plugin for the Ron Brooks Group. </p>
          <p>
            This plugin interacts with the AutoTrader API, allowing car data to
            merge seamlessly from four Ron Brooks stores directly into the
            website's backend. All data is kept up to date in near real-time
            through a custom webhook and API endpoints."
          </p>
        </Fragment>
      ),
      image: "/images/portfolio-rb.png",
      href: "https://www.ronbrooks.co.uk/",
    },

    {
      name: (
        <>
          BuytoGive: <span>Custom Laravel</span>
        </>
      ),

      description: (
        <Fragment>
          <p>
            A custom web application built in Laravel. This site promotes
            marketing tools for{" "}
            <a href="https://buytogive.co.uk/" target="_blank">
              Buy to Give
            </a>
            , a marketplace that donates to charity.
          </p>
          <p>
            {" "}
            Functionality includes social media API integration, enabling
            automatic posts on behalf of charities, and dynamic poster
            generation based on uploaded assets from users.
          </p>
        </Fragment>
      ),
      image: "/images/portfolio-btg.jpg",
      href: "https://www.btgmarketing.co.uk/",
    },

    {
      name: (
        <>
          Follwells.co.uk <span>Custom Wordpress</span>
        </>
      ),
      description: (
        <Fragment>
          <p>
            This custom WordPress plugin integrates with the Expert Agent API to
            fetch and store property listings
          </p>{" "}
          <p>
            Features include: custom frontend theme with custom property
            filtering, plugin to manage listings and automatic scheduler for
            property imports.{" "}
          </p>
        </Fragment>
      ),
      image: "/images/portfolio-follwells.jpg",
      href: "https://follwells.co.uk/properties-for-sale/",
    },
  ],
};

export default projects;
