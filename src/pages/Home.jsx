import { motion, transform, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Projects from '../components/Projets/Projects';
import OLetter from '../components/OLetter';
import Skills from '../components/Skills/Skills';
import { waitFor } from '@testing-library/react';
import { wait } from '../App';





const scrollableNum = 200;
let prev = 0;
export default function Home() {
    console.log('render')
    const homeRef = useRef();
    let { scrollY } = useScroll({
        container: homeRef
    });
    //0 400 scroll arasi 0-1 arasi deger ver
    let sc1Progress = useTransform(scrollY, [0, scrollableNum], [0, 1])
    let sc1ProgressVal=sc1Progress;
    let val2 = useTransform(scrollY, [0, scrollableNum], [0, -50])
    val2 = useSpring(val2);
    sc1Progress = useSpring(sc1Progress); // deger degisiminie spring uygula!
    //0=1 arasi degeri 30 80 seklinde style olarak ver...
    let initialClipPerc = 22;
    const cPath = useTransform(sc1Progress, latest => `circle(${latest * 57 + initialClipPerc}% at 50% 50%)`) // [20,80]

    // const blurVal = useTransform(sc1Progress, latest => {
    //     if (Math.abs(latest - prev) < .5) {
    //         return `blur(${prev * 4 + 1}px)`
    //     }
    //     prev = latest
    //     return `blur(${prev * 4 + 1}px)`
    // })
    //sc1Progress her degistiginde blurVal sc1Progress'in style'e inject edilmis halidir.
    //!blurVal.get()= `blur(3px)' seklinde bir deger dondurecektir,
    //bu sekilde her turlu style'a uygulayabiliriz.

    let contetnScale = useTransform(scrollY, [0, scrollableNum], [.9, 1.3])
    //0 400 arasini  => .9 -  1,3 arasinda bir sayiya cevir, x<0 y=.0 x>400 y=1.3 olur

    let vh = window.innerHeight;

    let yk = useMotionValue(vh / 2);
    yk = useSpring(yk);

    useEffect(() => {
        const elem = homeRef.current;
        elem.addEventListener('scroll', async () => {
            if (
                yk.get() == vh / 2 && scrollY.getPrevious() < scrollY &&
                scrollY > (vh / 2)
            ) {

                homeRef.current.style.overflow = 'hidden'
                await wait(300)
                homeRef.current.style.overflow = 'auto'

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

    const fixedVariants = {
        initial: {
            clipPath: `circle(${initialClipPerc}% at 50% 50%)`
        },
        style: {
            clipPath: cPath
        }
    }
    const contentVariants = {
        initial: {
            scale: .9
        },
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
                delay: .7
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
                delay: .7
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
                delay: 2
            }}
        >
            <motion.div className="fixed-item fixed z-20 h-[100vh] w-[100vw]"
                {...fixedVariants}>
                <div className="container relative z-0 w-full h-full">
                    <motion.div

                        className="image absolute z-0 left-0 top-0 w-[100vw] h-[100vh] bg" >



                        <motion.img
                            style={{
                                // y: val2
                            }}
                            // src="image2.jpg" alt="" className='h-[1080px] w-[1920px] blur-xl' 
                            />
                    </motion.div>
                    <motion.div
                        {...contentVariants}
                        className="content  relative z-20 w-[100vw] h-[100vh] flex flex-col justify-center items-center md:text-7xl  text-white  text-4xl">
                        <motion.div className="container relative w-full h-max py-3 flex flex-col justify-center items-center">
                            <div className="wrapper relative z-20 w-max h-max flex flex-col items-center">

                                <h1 className='pt-1 relative w-max h-max flex items-center'>hell<OLetter sc1Progress={sc1Progress}  />
{/* 
                                    <motion.div className='absolute top-0 left-1/2  w-[100%] h-1 bg-white'
                                        style={{
                                            scaleX: sc1Progress,
                                            translateX: '-50%',
                                        }}>
                                    </motion.div> */}
                                </h1>
                                <h1 className=''>i am ersin</h1>
                                <h1 className='flex items-center'>fr<OLetter sc1Progress={sc1Progress} cs={"self-end"}/>ntend l<OLetter sc1Progress={sc1Progress} cs={"self-end"}/>ver</h1>
                                <motion.div className='absolute top-[100%] left-1/2  w-[120%] h-1 bg-white border-t-2 border-dotted border-black'
                                    style={{
                                        scaleX: useTransform(sc1Progress,[0,1],[.7,1]),
                                        translateX: '-50%',

                                    }}>
                                </motion.div>

                            </div>


                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                transition={{ duration: 2, delay: 1 }}
                style={{ originX: .1, originY: .5 }}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                ref={homeRef}
                className={'Home relative component  w-full h-[100vh] overflow-y-scroll overflow-x-hidden z-20'}>

                <motion.div
                    transition={{ duration: 4 }}
                    className="hero">
                    <div className="section s1 h-[100vh] relative z-10  overflow-hidden pb-3 ">
                    </div>
                    <div className="hero-section h-[400px] relative z-0 "></div>
                    <div className=" relative w-full h-auto flex justify-center ">
                        <motion.div
                            className="sections  w-[100%] sm:w-[80%]  bg-white p-4 pb-24  rounded-xl">
                            <motion.div
                                {...mainContentVariants}

                                className='w-full h-full'>

                                <motion.div {...linkVariants} className="contact relative  p-4 gap-4 flex justify-center">
                                    <div className="link w-20 "><a href=""><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" /></a></div>
                                </motion.div>
                                {/* abput me */}
                                <motion.div {...linkVariants} className="section3 techs   flex flex-col    ">
                                    <Skills />
                                </motion.div>
                                <motion.div {...linkVariants} name="projects" className="w-full">
                                    <Projects />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                    </div>
                </motion.div>
            </motion.div>
        </motion.div>

    )
}



// note: framer makes animation easy 