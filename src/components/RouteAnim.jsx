import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { wait } from '../App';




export default function RouteAnim({ currMenu, newMenu, setCurrMenu }) {


    let val = useMotionValue(20);
    val = useSpring(val, { stiffness: 60, damping: 10 })
    let val3 = useTransform(val, latest => {
        return `${latest}vmax`
    })

    const containerRef = useRef();

    const circleRef = useRef();

    useEffect(() => {
        
        val.set(20)
        containerRef.current.style.zIndex = "99";


        const foo = async () => {

            await wait(500);
            val.set(200);
            containerRef.current.style.zIndex = "30";
            await wait(400)
            containerRef.current.style.opacity = "0";
            await wait(400)
            containerRef.current.style.visibility = "hidden";

        }
        foo();

    }, [currMenu]);

    useEffect(() => {
        const foo = async () => {
            containerRef.current.style.visibility = "visible";
            containerRef.current.style.opacity = "1";
            val.set(20);
            await wait(400)
            setCurrMenu(newMenu);
        }
        foo();

    }, [newMenu]);


    return (

        <div
            ref={containerRef}
            className='center-non-static fixed z-30  component w-[100vmax] h-[100vmax] overflow-hidden  flex justify-center items-center transition-opacity '>
            {currMenu === 'home' ? <motion.div
                ref={circleRef}
                layoutId='home-menu'
                transition={{
                    duration: .5, delay: .4,
                }}
                style={{
                    width: val3, height: val3,
                }}
                className={'Home bg text-white rounded-full flex items-center justify-center transition-opacity overflow-hidden'}>
                <h1 className=' text-3xl'>Home</h1>

            </motion.div>
                : null
            }


            {currMenu === 'work' ? <motion.div

                layoutId='work-menu'
                transition={{ duration: .4, delay: .4 }}
                style={{
                    width: val3, height: val3
                }}
                className={'Home bg text-white rounded-full flex items-center justify-center'}>
                <h1 className=' text-3xl'>Work</h1>

            </motion.div>
                : null
            }



            {currMenu === 'contact' ? <motion.div

                layoutId='contact-menu'
                transition={{ duration: .4, delay: .4 }}
                style={{
                    width: val3, height: val3
                }}
                className={'Home bg text-white rounded-full flex items-center justify-center'}>
                <h1 className=' text-3xl'>Contact</h1>

            </motion.div>
                : null
            }



        </div>
    )
}
