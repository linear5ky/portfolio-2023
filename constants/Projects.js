
import {Fragment} from 'react'
const projects= {
    items: [
        {
            name: 'Elite Caretaker',
            description: <Fragment><p>A custom web application built in Laravel and Vue. This site helps to digitise health and safety reports that are undertaken by hundreds of schools across the Midlands area.</p> <p>Functionality includes digital signatures, customised data tables and a full admin interface that manages everything.</p></Fragment>,
            image: '/images/portfolio-elite.jpg', 
            href:   'https://caretakersapp.elitesie.uk/',
        }, 
        {
            name: 'BuytoGive',
            description: <Fragment><p>A custom web application built in Laravel. This site promotes marketing tools for <a href="https://buytogive.co.uk/" target="_blank">Buy to Give</a>, a marketplace that donates to charit.</p><p> Functionality includes social media API integration, enabling automatic posts on behalf of charities, and dynamic poster generation based on uploaded assets from users.</p></Fragment>,
            image: '/images/portfolio-btg.jpg',
            href:   'https://www.btgmarketing.co.uk/',
        },
      
            {
            name: 'Featurewall',
            description: <Fragment><p>This API-based, custom Wordpress website enables users to choose from thousands of images to create personalized wallpaper murals. </p><p> Features include: custom Cropper,  bespoke Calendar, multiple APIs for image selection and to facilitate the order for the installation team.</p></Fragment>,
            image: '/images/portfolio-imdecor2.png',
            href:   'https://www.featurewall.co.uk/',
        },
       {
            name:   'TCL Cloud',
            description: <Fragment><p>This custom web application, built with Laravel and Vue, streamlines the entire process of hiring out a fleet of vehicles.</p> <p> Features include: digital signatures, contracts, video recordering and is all fully managed via the backend admin that is styled via Tailwind</p></Fragment>,
            image: '/images/portfolio-tcl.jpg',
            href:   'https://tanker.cloud',
        },
        {
            name: 'Follwells',
            description: <Fragment><p>This custom WordPress plugin integrates with the Expert Agent API to fetch and store property listings</p> <p>Features include: custom frontend theme with custom property filtering, plugin to manage listings and automatic scheduler for property imports. </p></Fragment>,
            image: '/images/portfolio-follwells.jpg',
            href:   'https://follwells.co.uk/properties-for-sale/',
        },
        

    
    ]

};

 

export default projects;
