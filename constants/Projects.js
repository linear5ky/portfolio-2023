
import {Fragment} from 'react'
const projects= {
    items: [

            {
            name: 'Featurewall',
            description: <Fragment><p>This API-based, custom Wordpress website enables users to choose from thousands of images to create personalized wallpaper murals. </p><p> Features include: custom Cropper,  bespoke Calendar, multiple APIs for image selection and to facilitate the order for the installation team.</p></Fragment>,
            image: '/images/portfolio-imdecor2.png',
            href:   'https://featurewall.co.uk/',
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
