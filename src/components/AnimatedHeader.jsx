import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedHeader({ isSettled, text, htmlText, setDum }) {
    let h2Text = htmlText;
    const [isCurrH2Finished, setIsCurrH2Finished] = useState(false);
    const [currH2Text, setCurrH2Text] = useState('');
    useEffect(() => {
        if (!isSettled) return;
        setTimeout(() => {

            for (let i = 0; i < h2Text.length; i++) {

                setTimeout(() => {
                    setCurrH2Text(prev => prev + h2Text[i]);
                    if (i == h2Text.length - 1) {
                        setTimeout(() => {
                            setDum(prev => !prev)
                            setIsCurrH2Finished(true);
                        }, 500);
                    }
                }, i * 50);

            }
        }, 1000);

    }, [isSettled]);
    const transition = { duration: .3, damping: 10, stiffness: 200, bounce: 10 }
    return (
        <motion.div
            transition={{ ...transition }}
            layout className=' '>{
                isCurrH2Finished ?
                    <motion.h2 layout className='text-5xl mb-3 max-sm:text-3xl'>{text}</motion.h2>
                    : currH2Text
            }
        </motion.div >
    )
}
