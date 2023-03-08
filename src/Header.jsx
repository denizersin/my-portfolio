import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdOutlineNightlight } from 'react-icons/md';
import Nav from './Nav';
import { motion } from 'framer-motion'

export default function Header({ currMenu, setCurrMenu, setIsFormOpen, isFormOpen, setDarkToggle }) {



    const handleAddTask = (e) => {
        setIsFormOpen(prev => !prev);
    }
    return (
        <motion.div layout className={'Header component w-full h-max sticky  flex-col justify-center bg-slate-50 dark:bg-transparent'}>
            <div className="r1 flex justify-center">
                <motion.div className={`add-task transition cursor-pointer ${!isFormOpen ? 'rotate-45' : 'rotate-0'}`} onClick={handleAddTask}>
                    <AiOutlinePlusCircle size={30} className={``} />
                </motion.div>
                <div className="theme cursor-pointer"
                    onClick={() => setDarkToggle(prev => !prev)}>
                    <MdOutlineNightlight size={30} />
                </div>
            </div>
            <Nav currMenu={currMenu} setCurrMenu={setCurrMenu} />
        </motion.div>

    )
}
