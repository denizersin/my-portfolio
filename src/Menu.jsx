import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'

export default function Menu({ currMenu, setCurrMenu }) {


    const navigate = useNavigate();
    const handleClick = (e) => {
        let name = e.currentTarget.getAttribute('name');
        console.log(name)
        navigate(`/${name}`);
        setCurrMenu(name)
    }
    console.log(currMenu)
    return (
        <div className={'Menu component fixed bottom-0 w-full h-20  z-40 flex bg-yellow-100 justify-center items-center'}>
            <motion.div layout className="mens-container flex bg-green-400 w-[200px] justify-center">

                {
                    currMenu !== 'home' ?

                        (<motion.div layout className="contaienr  w-10 h-10 flex justify-center items-center">
                            <motion.div
                                layout
                                name="home"
                                onClick={handleClick}
                                layoutId='home-menu'
                                className='  w-6 h-6 bg-red-400 z-0 rounded-sm '
                                transition={{ duration: .4 }}
                                style={{ originX: .1, originY: .5 }}

                            >
                                <motion.h1 layout className='w-max h-max'>
                                    H
                                </motion.h1>

                            </motion.div>
                        </motion.div>)
                        : null
                }


{
                    currMenu !== 'home' ?

                        (<motion.div layout className="contaienr  w-10 h-10 flex justify-center items-center">
                            <motion.div
                                layout
                                name="home"
                                onClick={handleClick}
                                layoutId='home-menu'
                                className='  w-6 h-6 bg-red-400 z-0 rounded-sm '
                                transition={{ duration: .4 }}
                                style={{ originX: .1, originY: .5 }}

                            >
                                <motion.h1 layout className='w-max h-max'>
                                    H
                                </motion.h1>

                            </motion.div>
                        </motion.div>)
                        : null
                }


                {
                    currMenu !== 'contact' ?

                        <motion.div layout className="contaienr  w-10 h-10 flex justify-center items-center">

                            <motion.div
                                name="contact"
                                onClick={handleClick}
                                layoutId='contact-menu'
                                layout
                                className='  w-6 h-6 bg-red-400 z-0 rounded-sm '
                                transition={{ duration: .4 }}
                                style={{ originX: .1, originY: .5 }}

                            >
                                <motion.h1 layout className='w-max h-max'>
                                    C
                                </motion.h1>

                            </motion.div>
                        </motion.div>
                        : null
                }
                {
                    currMenu !== 'work' ?

                        <motion.div layout className="contaienr  w-10 h-10 flex justify-center items-center">
                            <motion.div
                                name="work"
                                onClick={handleClick}
                                layoutId='work-menu'
                                layout
                                className='  w-6 h-6 bg-red-400 z-0 rounded-sm '
                                transition={{ duration: .4 }}
                                style={{ originX: .1, originY: .5 }}

                            >
                                <motion.h1 layout className='w-max h-max'>
                                    W
                                </motion.h1>

                            </motion.div>
                        </motion.div>
                        : null
                }

            </motion.div>
        </div>
    )
}
