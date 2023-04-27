
import {Fragment} from 'react'
const projects= {
    items: [
        {
            name:   'TCL Cloud',
            description: <Fragment><p>Custom web application written in Laravel. That details the whole process of hiring out their fleet of vehiclkes</p><p>Features include: digital signatures, contracts, video recordering and is all fully managed via the backend admin that is styled via Tailwind.</p></Fragment>,
            image: '/images/portfolio-tcl.jpg',
            href:   'https://tanker.cloud',
        },
        {
            name: 'Follwells',
            description: <Fragment><p>A custom Wordpress plugin that integrates with Expert Agent API and stores properties in the backend fetched via a cron job. The frontend is a custom javascript theme with filtering and search.</p></Fragment>,
            image: '/images/portfolio-follwells.jpg',
            href:   'https://follwells.co.uk/properties-for-sale/',
        },
        
      
        {
            name: 'Ronbrooks',
            description: <Fragment><p>A Custom Wordpress application that integrates with the AutoTrader API. Car data is kept uptodate vi a custom API and webhook.</p></Fragment>,
            image: '/images/portfolio-rb.jpg    ',
            href:   'https://follwells.co.uk/properties-for-sale/',
        },

        {
            name: 'IM Decor',
            description: <Fragment><p>A custom Wordpress application that connects to the Adobe API. Allowing users to pick out designs from thousands of images to use as a wallpaper mural. </p><p>Features include; Custom Cropper, Calendar and the websites communicates several APIs to facilates the selection of images and to purchase a product.</p></Fragment>,
            image: '/images/portfolio-imdecor2.png',
            href:   'https://marcusp22.sg-host.com/',
        },
       
    ]

};

 

export default projects;
