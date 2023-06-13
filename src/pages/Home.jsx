import { motion, transform, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Projects from '../components/Projets/Projects';
import OLetter from '../components/OLetter';
import Skills from '../components/Skills/Skills';
import { waitFor } from '@testing-library/react';
import { wait } from '../App';
import Links from '../components/Links';





const scrollableNum = 200;
let prev = 0;
export default function Home() {
    const [dum, setDum] = useState(false);
    const [isSettled, setIsSettled] = useState(false);
    console.log('render')
    const homeRef = useRef();
    let { scrollY } = useScroll({
        container: homeRef
    });
    let sc1Progress = useTransform(scrollY, [0, scrollableNum], [0, 1])
    let sc1ProgressVal = sc1Progress;
    sc1Progress = useSpring(sc1Progress); // deger degisiminie spring uygula!
    let fixedBackScle = useTransform(sc1Progress, [0, 1], [1 / 3, 2.5])
    let fixedBackTransfrom = useTransform(sc1Progress, (l => `translate(-50%,-50%) scale(${fixedBackScle.get()})`))
    let contetnScale = useTransform(fixedBackScle, l => l == 0 ? .3 : ((1 / l)))
    console.log(contetnScale.get())
    let vh = window.innerHeight;

    let yk = useMotionValue(vh / 2);
    yk = useSpring(yk);

    useEffect(() => {
        const elem = homeRef.current;
        elem.addEventListener('scroll', async () => {
            if (
                yk.get() == vh / 2 && scrollY.getPrevious() < scrollY.get() &&
                scrollY.get() > (vh / 2)
            ) {

                homeRef.current.style.overflow = 'hidden'
                await wait(600)
                homeRef.current.style.overflow = 'auto'
                setIsSettled(true);
            }

        })
    }, []);
    scrollY.on('change', latest => {
        if (
            yk.get() == vh / 2 && scrollY.getPrevious() < latest &&
            latest > (vh / 2)
        ) {
            yk.set(vh + 400);

        }
    })

    yk.on('change', latest => {
        homeRef.current.scrollTop = latest;
    })


    ///variants


    const contentVariants = {

        style: {
            scale: contetnScale
        },
        animate: "initial",
        transition: {
            duration: 2
        }
    }

    var linkVariants = {
        initial: {
            opacity: 0,
            y: 200
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .3,
                delay: .7,
                stiffnes: 100

            }
        },
        viewport: { once: true },
        animate: 'whileInView'
    }

    var mainContentVariants = {
        initial: {
            opacity: 0,
            visibility: 'hidden'
        },
        whileInView: {
            visibility: 'visible',
            opacity: 1,
            transition: {
                duration: 1,
                delay: .7,

            }

        },

        viewport: { once: true },
        animate: 'whileInView'
    }






    return (
        <motion.div initial={{
            opacity: 0
        }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: .4,
                delay: 2,

            }}
        >
            <motion.div className="fixed-item left-0 top-0 fixed z-20 w-full h-full overflow-hidden  "
            // {...fixedVariants}
            >
                <div className=" relative z-0 w-[100vw] h-[100vh]  ">
                    <motion.div
                        style={{
                            transform: fixedBackTransfrom
                        }}
                        className="image absolute z-0  center-non-static w-[100vh] h-[100vh]  rounded-full border-[20px] border-gray-400  bg    flex items-center justify-center overflow-hidden" >
                        <motion.div
                            {...contentVariants}
                            className="content  relative z-20 w-[100vw] h-[100vh] flex flex-col justify-center items-center md:text-7xl  text-white  text-4xl ">
                            <motion.div className="container relative w-full h-max py-3 flex flex-col justify-center items-center">
                                <div className="wrapper relative z-20 w-max h-max flex flex-col items-center">

                                    <h1 className='pt-1 relative w-max h-max flex items-center'>hell<OLetter sc1Progress={sc1Progress} />

                                        <motion.div className='absolute top-0 left-1/2  w-[100vw] h-1 bg-white'
                                            style={{
                                                scaleX: sc1Progress,
                                                translateX: '-50%',
                                            }}>
                                        </motion.div>
                                    </h1>
                                    <h1 className=''>i am ersin</h1>
                                    <motion.h1
                                        style={{
                                            x: useTransform(sc1Progress, [0, 1], [0, 300]),
                                        }}
                                        className=' flex items-center'>fr<OLetter sc1Progress={sc1Progress} cs={"self-end"} />ntend l<OLetter sc1Progress={sc1Progress} cs={"self-end"} />ver</motion.h1>
                                    <motion.div className='absolute  top-[100%] left-1/2  w-[100vw] h-1 bg-white border-t-2 border-dotted border-black'
                                        style={{
                                            // scaleX: useTransform(sc1Progress, [0, 1], [.8, 1]),
                                            translateX: '-50%',

                                        }}>
                                    </motion.div>

                                </div>


                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div>
            </motion.div>

            <motion.div
                transition={{ duration: 1, delay: 1 }}
                style={{ originX: .1, originY: .5 }}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                ref={homeRef}
                layout
                className={'Home relative component  w-full h-[100vh] overflow-y-scroll overflow-x-hidden z-20 '}>

                <motion.div
                    transition={{ duration: 1 }}
                    
                    className="hero ">
                    <div className="section s1 h-[100vh] relative z-10   overflow-hidden pb-3 ">
                    </div>
                    <div className="hero-section h-[400px] relative z-0 "></div>
                    <motion.div  className='relative w-full h-auto '>
                        <motion.div
                            layout
                            className=" relative w-full h-auto flex justify-center z-20  text-white backdrop-blur-xl rounded-lg">
                            <motion.div
                                
                                className="sections  relative z-20 w-[100%] max-sm:w-full sm:w-[95%] test p-16 pt-16 max-sm:pt-6 max-sm:px-1   pb-24  border-[0px] max-sm:border-0 border-gray-400/50   rounded-3xl  ">
                                {/* <div className="back absolute z-0 w-full h-full   "></div> */}
                                <motion.div
                                    
                                    {...mainContentVariants}

                                    className='w-full h-full relative  overflow-hidden  '>
                                    {/* 
                                <motion.div {...linkVariants} className="contact relative  p-4 gap-4 flex justify-center">
                                    <div className="link w-20 "><a href=""><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" /></a></div>
                                </motion.div> */}
                                    {/* abput me */}
                                    <Links isSettled={isSettled} />

                                    <motion.div  {...linkVariants} className="section3 techs   flex flex-col    ">
                                        <Skills isSettled={isSettled} setDum={setDum} />
                                    </motion.div>
                                    <motion.div {...linkVariants} name="projects" className="w-full">
                                        <Projects />
                                    </motion.div>
                                </motion.div>
                                <div className="hero-section h-[60px] relative z-0 "></div>
                            </motion.div>

                        </motion.div>
                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.div>

    )
}



// note: framer makes animation easy 