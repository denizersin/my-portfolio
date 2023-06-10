import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
export default function Menu({ currMenu, setCurrMenu, setNewMenu }) {


    const navigate = useNavigate();
    const handleClick = (e) => {
        let name = e.currentTarget.getAttribute('name');
        console.log(name)
        navigate(`/${name}`);
        setNewMenu(name)
    }




    return (
        <div className={'Menu component bg fixed bottom-0 w-[100%] h-max py-0.5  z-40 flex  justify-center items-center border-t '}>
            <motion.div layout className="mens-container relative flex gap-4  w-[200px] h-[50px]   justify-center items-center py-2  "
            >
                <motion.div
                    transition={{
                        delay: 1
                    }}
                    layout className="border border-white contaienr  text-black cursor-pointer relative z-10 w-12 h-12 flex justify-center items-center rounded-full ">

                    {
                        currMenu !== 'home' ?

                            <motion.div
                                layout
                                name="home"
                                onClick={handleClick}
                                layoutId='home-menu'
                                className=' absolute z-10 w-12 h-12 bg text-white rounded-full flex items-center justify-center '
                                transition={{ duration: .4 }}

                            >
                                <motion.span>
                                    <AiOutlineHome className='text-[25px] text-white'></AiOutlineHome>
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
                    layout className="border z-10 border-white contaienr  text-black cursor-pointer relative w-12 h-12 flex justify-center items-center rounded-full ">


                    {
                        currMenu !== 'contact' ?


                            <motion.div
                                layout
                                name="contact"
                                onClick={handleClick}
                                layoutId='contact-menu'
                                className=' absolute z-10 w-12 h-12 bg text-white rounded-full flex items-center justify-center '

                                transition={{ duration: .4 }}

                            >
                                <AiOutlineMail className='text-[25px] text-white' />

                            </motion.div>
                            : null
                    }
                    <AiOutlineMail className='text-[25px] text-white' />
                </motion.div>



                <motion.div
                    transition={{
                        delay: 1
                    }}
                    layout className="border z-10 border-white contaienr  text-white cursor-pointer relative w-12 h-12 flex justify-center items-center rounded-full ">


                    {
                        currMenu !== 'work' ?


                            <motion.div
                                layout
                                name="work"
                                onClick={handleClick}
                                layoutId='work-menu'
                                className=' absolute z-10 w-12 h-12 bg text-white rounded-full flex items-center justify-center '

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
