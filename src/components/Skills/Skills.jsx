import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedHeader from '../AnimatedHeader';



export default function Skills({ isSettled,setDum }) {



    const transition = { duration: .3, damping: 10, stiffness: 200, bounce: 10 }

    return (
        <motion.div layout
            transition={{ ...transition }}


        className='  mb-6 max-sm:mb-0  max-sm:text-lg text-center '>
            <motion.div layout transition={{ ...transition }}className="h1">
                {
                    <AnimatedHeader setDum={setDum}  isSettled={isSettled} text={'My Tech Stack'} htmlText={`<h1 class="text-3xl text-center">My Tech Stack</h2>`}/>

                }
            </motion.div>
            <motion.div
                layoutp
                transition={{ ...transition }}


                className="container w-full flex flex-wrap gap-2 justify-center  border-y py-6   border-gray-400/50 0 h-max  ">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="javascript logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" height="40" width="52" alt="typescript logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo" />
                <img className='w-[52px] h-[52px]' src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png" height="41" width="41" alt="next logo" />

                <img className='w-[52px] h-[52px]' src="https://miro.medium.com/v2/resize:fit:875/1*elhu-42TzQEdsFjKDbQhhA.png" height="40" width="40" alt="react-query logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="40" width="52" alt="redux logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="40" width="52" alt="sass logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="40" width="52" alt="tailwindcss logo" />

                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" height="52" width="52" alt="git logo" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="40" width="52" alt="firebase logo" />
                <img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" height="40" width="72" alt="mysql logo" />
                <img src="https://logowik.com/content/uploads/images/prisma2244.jpg" height="40" width="52" alt="prisma logo" />
            </motion.div>
        </motion.div>
    )
}
