export const container = {
    hidden: { opacity: 0 },
    show: {opacity:1,
        transition: {
            delayCHildren:0.5,
            staggerChildren: 0.25
        },
    },
}


export const item = { 
    hidden: { opacity: 0 },
    show: {opacity:1},
}


export const rtl  = {
    visible: { opacity: 1, x: "0px" },
    hidden: { opacity: 0, x: "250px", transition: { duration: 1}},

}

export const ltr  = {
    visible: { opacity: 1, x: "0px" },
    hidden: { opacity: 0, x: "-250px", transition: { duration: 1}},

}


export const fade  = {
    visible: { opacity: 1 },
    hidden: { opacity: 0,  transition: { duration: 0.5}},

}