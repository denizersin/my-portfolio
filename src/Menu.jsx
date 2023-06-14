import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import * as cs from 'classnames';
export default function Menu({ currMenu, setCurrMenu, setNewMenu }) {


    const navigate = useNavigate();
    const handleClick = (e) => {

        let name = e.currentTarget.getAttribute('name');
        console.log(name)
        setNewMenu(name)

        // navigate(`/${name}`);
    }

    useEffect(() => {
        setTimeout(() => {
            navigate(`/${'home'}`);
            setNewMenu('home')
        }, 0);

    }, []);


    return (
        <div className={'Menu component  fixed bottom-0 w-[100%] h-max py-0.5  z-40 flex  justify-center items-center  '}>
            <motion.div layout className="mens-container relative flex gap-4  w-[200px] h-[50px]   justify-center items-center py-2  "
            >
                <motion.div
                    transition={{
                        delay: 1
                    }}
                    layout className={cs(" bg  border-gray-400 contaienr text-black cursor-pointer relative z-10 w-12 h-12 flex justify-center items-center rounded-full ",
                        {
                            'border-4': currMenu === 'home'
                        }
                    )}>

                    {
                        currMenu !== 'home' ?

                            <motion.div
                                layout
                                name="home"
                                onClick={handleClick}
                                layoutId='home-menu'
                                className='bg absolute z-10 w-12 h-12  text-white rounded-full flex items-center justify-center '
                                transition={{ duration: .4 }}

                            >
                                <motion.span className=''>
                                    <AiOutlineHome className=' text-[25px] text-white'></AiOutlineHome>
                                </motion.span>
                            </motion.div>
                            : null
                    }
                    <motion.span >
                        <AiOutlineHome className='text-[25px] text-white'></AiOutlineHome>

                    </motion.span>


                </motion.div>

                <motion.div
                    transition={{
                        delay: 1
                    }}
                    layout className={cs(" bg  border-gray-400 contaienr text-black cursor-pointer relative z-10 w-12 h-12 flex justify-center items-center rounded-full ",
                        {
                            'border-4': currMenu === 'contact'
                        }
                    )}>


                    {
                        currMenu !== 'contact' ?


                            <motion.div
                                layout
                                name="contact"
                                onClick={handleClick}
                                layoutId='contact-menu'
                                className=' bg absolute z-10 w-12 h-12  text-white rounded-full flex items-center justify-center '

                                transition={{ duration: .4 }}

                            >
                                <AiOutlineMail className=' text-[25px] text-white' />

                            </motion.div>
                            : null
                    }
                    <AiOutlineMail className='text-[25px] text-white' />
                </motion.div>



                <motion.div
                    transition={{
                        delay: 1
                    }}
                    layout className={cs(" bg  border-gray-400 contaienr text-white cursor-pointer relative z-10 w-12 h-12 flex justify-center items-center rounded-full ",
                        {
                            'border-4': currMenu === 'work'
                        }
                    )}>

                    {
                        currMenu !== 'work' ?


                            <motion.div
                                layout
                                name="work"
                                onClick={handleClick}
                                layoutId='work-menu'
                                className='bg absolute z-10 w-12 h-12 bg2 text-white rounded-full flex items-center justify-center '

                                transition={{ duration: .4 }}

                            >
                                W

                            </motion.div>
                            : null
                    }
                    W
                </motion.div>


            </motion.div>
            <div className="back absolute left-0 top-0 z-0  w-full h-full   "></div>




        </div>
    )
}
