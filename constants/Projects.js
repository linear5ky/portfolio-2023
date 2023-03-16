
import {Fragment} from 'react'
const projects= {
    items: [
        {
            name:   'TCL Cloud',
            description: <Fragment><p>Custom web application written in Laravel. That details the whole process of hiring out tankers</p><p>Features include: digital signatures, contracts, video recordering and full backend admin area</p></Fragment>,
            image: '/images/portfolio-tcl.jpg',
            href:   'https://tanker.cloud',
        },
        {
            name: 'Follwells',
            description: <Fragment><p>Custom Wordpress plugin which saved properties from API.  With a custom ajax frontend allowing you to view and filter the properties</p></Fragment>,
            image: '/images/portfolio-follwells.jpg',
            href:   'https://follwells.co.uk/properties-for-sale/',
        },
        {
            name: 'IM Decor',
            description: <Fragment><p>Custom Wordpress application that connects to the Adobe API. Allowing users to pick out designs from thousands of images to use as a wallpaper mural. </p><p>Features include; Custom Cropper, Calendar and the websites communicates with multiple APIs</p></Fragment>,
            image: '/images/portfolio-imdecor.png',
            href:   'https://marcusp13.sg-host.com/',
        },

    ]

};

 

export default projects;
