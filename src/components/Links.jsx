import React from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export default function Links({ isSettled }) {
    return (
        <div className=" w-full flex justify-center">
            <motion.div layout
                id='test'
                transition={{
                    duration: .5,
                    delay: .3
                }}
                className={
                    classNames(
                        'w-0 overflow-hidden h-max rounded-3xl  mb-4 bg1 flex items-center justify-center',
                        {
                            'w-[97%] max-sm:w-full': isSettled
                        }
                    )
                }>
                <motion.div layout className='flex gap-4 h-[70px] items-center cursor-pointer '>
                    <motion.a layout className='h-max ' href="https://github.com/denizersin" target='_blank'>
                        <BsGithub className=' hover:text-[60px]  text-[50px]' />
                    </motion.a>
                    <motion.a layout className='h-max ' href="https://www.linkedin.com/in/ersin-deniz-7303391a8/" target='_blank'>
                        <BsLinkedin className='  text-blue-600 bg-white hover:text-[60px]  text-[50px]' />
                    </motion.a>
                    <motion.a layout className='h-max' href="https://twitter.com/whattheheck2314" target='_blank'>
                        <BsTwitter className='text-blue-500 hover:text-[70px]  text-[60px]' />
                    </motion.a>
                </motion.div>

            </motion.div>
        </div>
    )
}
