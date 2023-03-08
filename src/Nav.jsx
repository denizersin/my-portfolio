import React from 'react'
import { animate, AnimatePresence, motion } from 'framer-motion'

export default function Nav({ currMenu, setCurrMenu }) {


    const handleClickNav = (e) => {
        const name = e.currentTarget.getAttribute('name');
        if (name == currMenu) return;
        setCurrMenu(name);
    }


    return (
        <div className={'Nav'}>
            <ul className='flex justify-center gap-2'>
                <li onClick={handleClickNav} name='all' className="li-menu ">all
                    {'all' === currMenu ? (
                        <motion.div className="underline" layoutId="underline" />
                    ) : null}
                </li>
                <li onClick={handleClickNav} name='completed' className="li-menu">completed
                    {'completed' === currMenu ? (
                        <motion.div className="underline" layoutId="underline" />
                    ) : null}</li>
                <li onClick={handleClickNav} name='uncompleted' className="li-menu">uncompleted
                    {'uncompleted' === currMenu ? (
                        <motion.div className="underline" layoutId="underline" />
                    ) : null}</li>
            </ul>
        </div>
    )
}
