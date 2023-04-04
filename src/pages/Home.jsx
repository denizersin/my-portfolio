import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useEffect } from 'react'
import Projects from '../components/Projets/Projects';






const scrollableNum = 200;
let prev = 0;
export default function Home() {
    console.log('render')

    const { scrollY } = useScroll(0);

    //0 400 scroll arasi 0-1 arasi deger ver
    let sc1Progress = useTransform(scrollY, [0, scrollableNum], [0, 1])
    let val2 = useTransform(scrollY, [0, scrollableNum], [0, -50])
    val2 = useSpring(val2);
    sc1Progress = useSpring(sc1Progress); // deger degisiminie spring uygula!
    //0=1 arasi degeri 30 80 seklinde style olarak ver...
    const cPath = useTransform(sc1Progress, latest => `circle(${latest * 50 + 25}% at 50% 50%)`) // [20,80]
    const cPath2 = useTransform(sc1Progress, latest => `circle(${latest * 50 + 25.05}% at 50% 50%)`) // [20,80]

    const blurVal = useTransform(sc1Progress, latest => {
        if (Math.abs(latest - prev) < .5) {
            return `blur(${prev * 4 + 1}px)`
        }
        prev = latest
        return `blur(${prev * 4 + 1}px)`
    })
    //sc1Progress her degistiginde blurVal sc1Progress'in style'e inject edilmis halidir.
    //!blurVal.get()= `blur(3px)' seklinde bir deger dondurecektir,
    //bu sekilde her turlu style'a uygulayabiliriz.

    let contetnScale = useTransform(scrollY, [0, scrollableNum], [.9, 1.3])
    //0 400 arasini  => .9 -  1,3 arasinda bir sayiya cevir, x<0 y=.0 x>400 y=1.3 olur






    ///variants

    const fixedVariants = {
        initial: {
            clipPath: `circle(25% at 50% 50%)`
        },
        style: {
            clipPath: cPath
        }
    }
    const fixed2Variants = {
        initial: {
            clipPath: `circle(26% at 50% 50%)`
        },
        style: {
            clipPath: cPath2
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
    const contactContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 1
            }
        }
    }
    var linkVariants = {
        initial: {
            opacity: 0,
            y: 200
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: { once: true },
        animate: 'whileInView'
    }

    let val = useMotionValue(20);
    val = useSpring(val)
    let val3 = useTransform(val, latest => {
        return `${latest}vmax`
    })

    useEffect(() => {
        setTimeout(() => {
            val.set(140)
        }, 500);
        setTimeout(() => {

        }, 1000);
    }, []);


    return (
        <motion.div
            transition={{ duration: .20 }}
            style={{ originX: .1, originY: .5 }}
            className={'Home relative component bg-black w-full h-[100vh]'}>
            <div className='absoulte-center fixed z-40 component w-[100vmax] h-[100vmax]  flex justify-center items-center'>
                <motion.div
                    layoutId='home-menu'
                    transition={{ duration: .5 }}
                    style={{
                        originX: .1, originY: 5,
                        width: val3, height: val3
                    }}
                    className={'Home bg-red-400 rounded-full flex items-center justify-center'}>
                    <h1>HOME</h1>
                </motion.div>
            </div>


            <motion.div
                transition={{ duration: 4 }}
                className="hero">
                <div className="section s1 h-[100vh] relative z-0">
                    <motion.div className="fixed-item fixed z-10 h-[100vh] w-[100vw]   "
                        {...fixedVariants}>
                        <div className="container relative z-0 w-full h-full">
                            <motion.div

                                className="image absolute z-0 left-0 top-0 w-[100vw] h-[100vh] " >



                                <motion.img
                                    style={{
                                        filter: blurVal,
                                        y: val2
                                    }}
                                    src="bw.jpg" alt="" className='h-[1080px] w-[1920px]' />
                            </motion.div>
                            <motion.div
                                {...contentVariants}
                                className="content  relative z-20 w-[100vw] h-[100vh] flex flex-col justify-center items-center md:text-7xl  text-white  text-4xl">
                                <motion.div className="container relative w-full h-max py-3 flex flex-col justify-center items-center">
                                    <div className="wrapper w-max h-max"></div>
                                    <h1 className=''>hello</h1>
                                    <h1 className=''>i am Ersin</h1>
                                    <h1 className=''>Frontend Lover</h1>
                                    <motion.div className='absolute top-[102%] left-1/2  w-[40%] h-2 bg-white'
                                        style={{
                                            scaleX: sc1Progress,
                                            translateX: '-50%'
                                        }}>
                                    </motion.div>
                                    <motion.div className=''>

                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div name="fixed2" className="fixed-item2 fixed z-0 h-[100vh] w-[100vw]  bg-white"{...fixed2Variants}></motion.div>
                </div>

                <div className="hero-section h-[400px] relative z-0 "></div>
                <div className=" relative w-full h-auto flex justify-center">
                    <div className="sections  w-[100%] sm:w-[80%]  bg-white p-4  rounded-xl">
                        <motion.div {...linkVariants} className="contact relative  p-4 gap-4 flex justify-center">
                            <div className="link w-28 "><a href=""><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" /></a></div>
                            <div className="link w-28"><a href=""><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" /></a></div>
                            <div className="link w-28"><a href=""><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" /></a></div>
                        </motion.div>
                        {/* abput me */}
                        <motion.div {...linkVariants} transition={{ delay: .2 }} className="section3 techs   flex flex-col   ">
                            <div className="h1 flex justify-center text-6xl " >
                                <span className=''>I work with</span>
                            </div>
                            <div className="container w-[90%] flex flex-wrap gap-2 justify-center mt-4 border-y-4 h-max py-2 sm:justify-start">
                                <img className='w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="javascript logo" />
                                <img className='w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo" />
                                <img className='w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="40" width="52" alt="redux logo" />
                                <img className='w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo" />
                                <img className='w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="40" width="52" alt="sass logo" />
                                <img className='w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="40" width="52" alt="tailwindcss logo" />
                                <img className='w-20' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="40" width="52" alt="firebase logo" />
                            </div>
                        </motion.div>
                        <motion.div {...linkVariants} transition={{ delay: .2 }} name="projects" className="w-full">
                            <Projects />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

        </motion.div>
    )
}

