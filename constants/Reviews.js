
import {Fragment} from 'react'
const reviews= {
    items: [
        {
            author:   'Gavin Cooper',
            company:   <Fragment><a href="https://starbots-creative.co.uk/" target="_blank">Starbots Creative</a></Fragment>,
            review: <Fragment><p>"Marcus' attention to detail is commendable, and he has consistently met our project timelines. I appreciate his ability to work independently, and he has been open to communicating and collaborating with us when needed. 
                When we request revisions due to minor errors or misunderstandings, Marcus was prompt in addressing these issues, and it did not significantly impact the project's overall progress. In conclusion, I
                 would recommend Marcus to others and am looking forward to continuing our working relationship."</p></Fragment>,
            class: 'primary',
        },
        {
            author:   ' Richard Davenport',
            company:    <Fragment><a href="https://nrd.co.uk/" target="_blank">NRD</a></Fragment>,
            review: <Fragment><p>
            "Marcus was originally recommended to us for a small WordPress development job.  I knew immediately he was a great person to work with, and since then we have worked on multiple WordPress, WooCommerce, and Laravel development projects over several years.  I have no qualms in recommending Marcus for any type of development work, and do so on a regular basis".
            </p></Fragment>,
            class: 'secondary',
        },
        {
            author:   'Luke Sherwin',
            company:    <Fragment><a href="https://threeguru.com/" target="_blank">Three Guru</a></Fragment>,
            review: <Fragment><p>"Marcus supports us with all our custom web development needs. He is a pleasure to work with and always delivers on time and to a high standard. I would highly recommend Marcus to anyone looking for a reliable and skilled developer".
            </p></Fragment>,
            class: 'tertiary',
        },

        

    ]

};

 

export default reviews;
